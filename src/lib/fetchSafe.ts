// src/lib/fetchSafe.ts
export async function fetchSafe(
  input: RequestInfo,
  init?: RequestInit,
  fallback: any = null,
) {
  try {
    const res = await fetch(input, init);
    if (!res.ok) {
      console.error(`fetchSafe: non-2xx response for ${input}:`, res.status);
      return fallback;
    }
    return await res.json();
  } catch (err) {
    console.error(`fetchSafe: failed fetching ${input}:`, err);
    return fallback;
  }
}
