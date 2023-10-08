import {ReactNode} from "react";
import styled from "styled-components";
import {Comment} from "@/types/comment.types";
import {Author} from "@/types/author.types";
import {formatDate} from "@/lib/date";
import {Column} from "../UI/Column";
import {Row} from "../UI/Row";
import {BREAKPOINTS} from "@/constants/breakpoints";

const Wrapper = styled.article`
    display: flex;
    gap: 20px;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Content = styled.div`
    flex-grow: 1;
`;

const StyledColumn = styled(Column)`
    padding: 12px 0;
    gap: 4px;
    flex: 1 1 100px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        padding: 0;
    }
`;

const StyledRow = styled(Row)`
    gap: 8px;
`;

const Name = styled.h3`
    font-size: inherit;
    margin: 0;
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
    line-height: 1.3;
`;

const Time = styled.span`
    color: ${({theme}) => theme.palette.secondary.main};
`;

const Text = styled.p`
    word-break: break-all;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        margin-top: 8px;
    }
`;

const Likes = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.lg};
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
    const {text, created, likes} = comment;
    const {name} = author;

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
                            <Likes>{likes}</Likes>
                        </StyledRow>
                    )}
                </Header>
                <Text>{text}</Text>
            </Content>
        </Wrapper>
    );
}

export default CommentItem;
