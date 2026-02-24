/**
 * Returns true if the given expires string (e.g. "May 5, 2026") is within the next N days.
 */
export function isExpiringWithinDays(expiresStr: string, withinDays: number = 90): boolean {
  const date = new Date(expiresStr);
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const limit = new Date(today);
  limit.setDate(limit.getDate() + withinDays);
  date.setHours(0, 0, 0, 0);
  return date >= today && date <= limit;
}

/**
 * Format "May 5, 2026" -> "May 5th" for display in the expiring-soon headline.
 */
export function formatExpiresForHeadline(expiresStr: string): string {
  const date = new Date(expiresStr);
  if (Number.isNaN(date.getTime())) return expiresStr;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
  return `${month} ${day}${suffix}`;
}
