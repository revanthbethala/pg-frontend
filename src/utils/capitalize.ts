export function capitalize(name: string) {
  name = name.trim();
  if (!name) return;
  return name.charAt(0).toUpperCase() + name.substring(1);
}
