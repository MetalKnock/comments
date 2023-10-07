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
`;

const NextLevel = styled.div`
    padding-left: 34px;

    @media (max-width: ${BREAKPOINTS.md}px) {
        padding-left: 20px;
    }
`;

const Avatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
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
                                <NextLevel>
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
