export type BlogState = {
    post: {
        title: string,
        content: string,
    },
    posts: Array<{
        title: string,
    }>
}