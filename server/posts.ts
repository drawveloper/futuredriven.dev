import { chain, Client, NotionBlocksMarkdownParser, pick } from "../deps.ts";

// Initializing a client
const auth = Deno.env.get("NOTION_TOKEN") || "";
if (auth == "") {
  throw new Error("NOTION_TOKEN env var is required.");
}

const databaseId = Deno.env.get("NOTION_POSTS_DB") || "";
if (databaseId == "") {
  throw new Error("NOTION_POSTS_DB env var is required.");
}

const notion = new Client({ auth });

export async function getPosts() {
  const { results } = await notion.databases.query({ database_id: databaseId });
  return chain((post: { properties: Record<any, any> }) => {
    const base = pick([
      "id",
      "cover",
      "created_time",
      "last_edited_time",
      "url",
    ], post);
    if (post.properties) {
      base.title = post.properties.Name.title[0];
      base.preview = post.properties.Preview.rich_text[0];
    }
    base.url = base.url.replace("https://www.notion.so", "/posts");
    return base;
  }, results);
}

export async function getPostById(pageId: string) {
  const { results } = await notion.blocks.children.list({ block_id: pageId });
  const parser = NotionBlocksMarkdownParser.getInstance();
  return parser.parse(results);
}

//await getPostById("51fe3c11-9d29-4f7d-9d9a-e321986c42c0")
