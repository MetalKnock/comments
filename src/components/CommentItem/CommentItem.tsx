import {ReactNode} from "react";
import styled from "styled-components";
import {Comment} from "@/types/comment";
import {Author} from "@/types/author";
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
    const {text, created} = comment;
    const {name} = author;

    const formattedCreated = formatDate(new Date(created));

    return (
        <Wrapper>
            {leftSlot && <div>{leftSlot}</div>}
            <div>
                <Wrapper>
                    <div>{name}</div>
                    <div>{formattedCreated}</div>
                    {actionSlot && <div>{actionSlot}</div>}
                </Wrapper>
                <div>{text}</div>
            </div>
        </Wrapper>
    );
}

export default CommentItem;