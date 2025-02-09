export function getItemLocalStorage<T>(key: string): T[] | null {
  const stringValue = localStorage.getItem(key)

  if (!stringValue) return null

  return JSON.parse(stringValue)
}

export function saveItemLocalStorage<T>(key: string, array: T[]): void {
  localStorage.setItem(key, JSON.stringify(array))
}
