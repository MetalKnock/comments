import {Comment} from "@/types/comment.types";

interface GetChildCommentsProps {
    comments: Comment[];
    parentId: number;
}

export function getChildComments({comments, parentId}: GetChildCommentsProps) {
    return comments.filter((comment) => comment.parent === parentId);
}

interface GetCurrentLevelCommentsProps {
    comments: Comment[];
    parentId: number | null;
}

export function getCurrentLevelComments({
    comments,
    parentId,
}: GetCurrentLevelCommentsProps) {
    return comments.filter((comment) => comment.parent === parentId);
}
