export interface Pagination<T> {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: T;
}

export interface Comment {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}
