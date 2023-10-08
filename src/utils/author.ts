import {Author} from "@/types/author.types";

interface GetAuthorByIdProps {
    authors: Author[];
    authorId: number;
}

export function getAuthorById({authors, authorId}: GetAuthorByIdProps) {
    const author = authors.find(({id}) => id === authorId);
    return author || null;
}
