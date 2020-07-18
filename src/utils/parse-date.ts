export function parseDate(text: string): string {
  const date = new Date(text);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
