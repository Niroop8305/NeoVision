import { FETCH_INTERVAL_MS } from '../config/index.js';
import { fetchAndStoreAsteroidData } from './nasaService.js';
import { getMongoCollection } from '../models/db.js';

let isFetching = false;

export async function scheduledFetch() {
  if (isFetching) return;
  isFetching = true;
  try {
    const { client, collection } = await getMongoCollection();
    const latest = await collection.findOne({}, { sort: { fetchedAt: -1 } });
    const now = new Date();
    if (!latest || (now - new Date(latest.fetchedAt)) > FETCH_INTERVAL_MS) {
      await fetchAndStoreAsteroidData();
    }
    await client.close();
  } catch (err) {
    console.error('Scheduled fetch error:', err);
  } finally {
    isFetching = false;
  }
}

export function startScheduler() {
  scheduledFetch();
  setInterval(scheduledFetch, FETCH_INTERVAL_MS);
}
