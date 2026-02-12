import { NotionAPI } from "notion-client"
import { normalizeResponse } from "src/libs/utils/notion/normalizeResponse"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI()
  const recordMap = normalizeResponse(await api.getPage(pageId))
  return recordMap
}
