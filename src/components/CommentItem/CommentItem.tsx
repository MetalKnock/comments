import {ReactNode} from "react";
import styled from "styled-components";
import {Comment} from "@/types/comment.types";
import {Author} from "@/types/author.types";
import {formatDate} from "@/lib/date";

const Wrapper = styled.div`
    display: flex;
`;

interface CommentItemProps {
    comment: Comment;
    author: Author;
    leftSlot?: ReactNode;
    actionSlot?: ReactNode;
}

function CommentItem({
    comment,
    author,
    leftSlot = null,
    actionSlot = null,
}: CommentItemProps) {
    const {text, created, parent, id, likes} = comment;
    const {name} = author;

    const formattedCreated = formatDate(new Date(created));

    return (
        <Wrapper>
            {leftSlot && <div>{leftSlot}</div>}
            <div>
                <Wrapper>
                    <div>{name}</div>
                    <div>{formattedCreated}</div>
                    {actionSlot && (
                        <>
                            <div>{actionSlot}</div>
                            <div>{likes}</div>
                        </>
                    )}
                </Wrapper>
                <div>{text}</div>
                <div>{id}</div>
                <div>{parent}</div>
            </div>
        </Wrapper>
    );
}

export default CommentItem;
