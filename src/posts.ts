import { chain, Client, NotionBlocksMarkdownParser, pick, Marked } from "./deps.ts";

export type PostsState = Array<Post>

export type PostState = {
    title: string
    content: string
}

export interface External {
    url: string;
}

export interface Cover {
    type: string;
    external: External;
}

export interface Text {
    content: string;
    link?: any;
}

export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface Title {
    type: string;
    text: Text;
    annotations: Annotations;
    plain_text: string;
    href?: any;
}

export interface Preview {
    type: string;
    text: Text;
    annotations: Annotations;
    plain_text: string;
    href?: any;
}

export interface Post {
    id: string;
    coverUrl: string;
    created_time?: string;
    last_edited_time?: string;
    url: string;
    title: string;
    content: string;
}

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

export async function getPosts(): Promise<PostsState> {
  const { results } = await notion.databases.query({ database_id: databaseId });
  return chain((post: { properties: Record<any, any> }) => {
    const base = pick([
      "id",
      "cover",
      "created_time",
      "last_edited_time",
      "url",
    ], post);
    const parser = NotionBlocksMarkdownParser.getInstance();
    const parsedPreview = parser.parseRichTexts(post.properties.Preview.rich_text)
    base.title = parser.parseRichTexts(post.properties.Name.title)
    base.preview = Marked.parse(parsedPreview).content
    base.url = base.url.replace("https://www.notion.so", "/p");
    return base;
  }, results);
}

export async function getPostById(pageId: string): Promise<Post> {
  const [page, blocks] = await Promise.all([
    notion.pages.retrieve({page_id: pageId}),
    notion.blocks.children.list({ block_id: pageId }),
  ])
  const parser = NotionBlocksMarkdownParser.getInstance();
  const title = parser.parseRichTexts(page.properties.Name.title)
  const url = page.url
  const md = parser.parse(blocks.results);
  const content = Marked.parse(md).content
  return {
    id: pageId,
    coverUrl: page.cover?.external?.url,
    content,
    title,
    url,
  };
}

//await getPostById("51fe3c11-9d29-4f7d-9d9a-e321986c42c0")
