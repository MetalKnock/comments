import {Comment} from "@/types/comment.types";

interface FilterCommentsByParentIdProps {
    comments: Comment[];
    parentId: number | null;
}

export function filterCommentsByParentId({
    comments,
    parentId,
}: FilterCommentsByParentIdProps) {
    return comments.filter((comment) => comment.parent === parentId);
}
