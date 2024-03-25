export default function useFormatRuntime(runtime: number) {
  if (!runtime) return "0h 0m";
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}