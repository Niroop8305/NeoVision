export function getJulianDateNow() {
  const now = new Date();
  return now.getTime() / 86400000 + 2440587.5;
}
