const POSTS_QUERY = {"collection":{"id":"0f3583b0-e168-4fe5-b970-c226716357ae","spaceId":"fdc08086-bbd9-4455-9bb8-79e96b88cdf3"},"collectionView":{"id":"d97e0aa2-9c62-4690-a4c7-c7eca463c75e","spaceId":"fdc08086-bbd9-4455-9bb8-79e96b88cdf3"},"loader":{"type":"reducer","reducers":{"collection_group_results":{"type":"results","limit":50},"table:uncategorized:title:count":{"type":"aggregation","aggregation":{"property":"title","aggregator":"count"}}},"searchQuery":"","userTimeZone":"America/Sao_Paulo"}}

export async function getPostsFromNotion (id: string | undefined) {
    const notionResponse = await fetch("https://fluorescent-hippodraco-75f.notion.site/api/v3/queryCollection", {
      body: JSON.stringify(POSTS_QUERY),
      headers: {
        Accept: "application/x-ndjson",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "Notion-Client-Version": "23.10.16.50",
        "User-Agent": "deno"
      },
      method: "POST"
    })
    const notionJson = await notionResponse.json()
    console.log(notionJson)
    return notionJson
}
