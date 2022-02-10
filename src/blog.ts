export type BlogState = {
    post: {
        title: string,
        content: string,
    },
    posts: Array<Post>
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
    cover: Cover | null;
    created_time: string;
    last_edited_time: string;
    url: string;
    title: Title;
    preview: Preview;
}
