import {ReactNode} from "react";
import {Comment} from "@/types/comment.types";
import {Author} from "@/types/author.types";
import {formatDate} from "@/lib/date";
import {
    Content,
    Header,
    Likes,
    Name,
    StyledColumn,
    StyledRow,
    StyledText,
    Time,
    Wrapper,
} from "./CommentItem.styled";
import {numberWithSpaces} from "@/utils/numbers";

interface CommentItemProps {
    comment: Comment;
    author: Author;
    leftSlot?: ReactNode;
    actionSlot?: ReactNode;
}

function CommentItem({
    comment: {text, created, likes},
    author: {name},
    leftSlot = null,
    actionSlot = null,
}: CommentItemProps) {
    const formattedCreated = formatDate(new Date(created));

    return (
        <Wrapper>
            {leftSlot && <div>{leftSlot}</div>}
            <Content>
                <Header>
                    <StyledColumn>
                        <Name>{name}</Name>
                        <Time>{formattedCreated}</Time>
                    </StyledColumn>
                    {actionSlot && (
                        <StyledRow>
                            <div>{actionSlot}</div>
                            <Likes>{numberWithSpaces(likes)}</Likes>
                        </StyledRow>
                    )}
                </Header>
                <StyledText>{text}</StyledText>
            </Content>
        </Wrapper>
    );
}

export default CommentItem;
