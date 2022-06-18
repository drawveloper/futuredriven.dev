import { PostsState, PostState } from "../posts.ts";

export type AppState = {
  blog: boolean;
  capital: boolean;
  dev: boolean;
  works: boolean;
  posts?: PostsState;
  post?: PostState;
  html?: string;
};
