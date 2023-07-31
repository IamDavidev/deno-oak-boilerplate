export async function tryUtil<T>(promise: Promise<T>) {
  try {
    const resp = (await promise) ?? null
    return [resp, null]
  } catch (err) {
    return [null, err]
  }
}
