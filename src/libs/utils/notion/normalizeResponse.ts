/**
 * Normalizes the Notion API response to handle the new nested structure.
 * Notion's API now wraps block and collection entries with { spaceId, value: { value, role } }
 * instead of the previous { value, role } format.
 */
export function normalizeResponse(response: any): any {
  if (response.block) {
    for (const [id, entry] of Object.entries<any>(response.block)) {
      if (entry && "spaceId" in entry && entry.value?.value) {
        response.block[id] = entry.value
      }
    }
  }

  if (response.collection) {
    for (const [id, entry] of Object.entries<any>(response.collection)) {
      if (entry && "spaceId" in entry && entry.value?.value) {
        response.collection[id] = entry.value
      }
    }
  }

  return response
}
