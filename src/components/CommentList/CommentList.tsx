import {Fragment} from "react";
import styled from "styled-components";
import {Author} from "@/types/author.types";
import {Comment} from "@/types/comment.types";
import {CommentItem} from "@/components/CommentItem";
import {getAuthorById} from "@/utils/author";
import {filterCommentsByParentId} from "@/utils/comment";
import {CommentLikeButton} from "@/features/CommentLike";
import {BREAKPOINTS} from "@/constants/breakpoints";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
    &:first-of-type {
        margin: 0px;
    }

    @media (max-width: ${BREAKPOINTS.sm}px) {
        gap: 24px;
        margin-top: 24px;
    }
`;

const NextLevel = styled.div<{
    $parentId: number | null;
}>`
    padding-left: ${({$parentId}) => ($parentId === null ? 34 : 0)}px;

    @media (max-width: ${BREAKPOINTS.md}px) {
        padding-left: ${({$parentId}) => ($parentId === null ? 20 : 0)}px;
    }
`;

const Avatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        width: 40px;
        height: 40px;
    }
`;

interface CommentListProps {
    comments: Comment[];
    authors: Author[];
    parentId?: number | null;
}

function CommentList({comments, authors, parentId = null}: CommentListProps) {
    const currentLevelComments = filterCommentsByParentId({comments, parentId});

    return (
        <Wrapper>
            {currentLevelComments.map((comment) => {
                const author = getAuthorById({
                    authors,
                    authorId: comment.author,
                });
                const childComments = filterCommentsByParentId({
                    comments,
                    parentId: comment.id,
                });

                return (
                    author && (
                        <Fragment key={comment.id}>
                            <CommentItem
                                comment={comment}
                                author={author}
                                actionSlot={
                                    <CommentLikeButton commentId={comment.id} />
                                }
                                leftSlot={
                                    <Avatar
                                        src={author.avatar}
                                        alt={author.name}
                                    />
                                }
                            />
                            {childComments.length > 0 && (
                                <NextLevel $parentId={parentId}>
                                    <CommentList
                                        comments={comments}
                                        authors={authors}
                                        parentId={comment.id}
                                    />
                                </NextLevel>
                            )}
                        </Fragment>
                    )
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
