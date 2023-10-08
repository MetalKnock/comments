import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;

    &:first-of-type {
        margin: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        gap: 24px;
        margin-top: 24px;
    }
`;

export const NextLevel = styled.div<{
    $parentId: number | null;
}>`
    padding-left: ${({$parentId}) => ($parentId === null ? 34 : 0)}px;

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        padding-left: ${({$parentId}) => ($parentId === null ? 20 : 0)}px;
    }
`;

export const Avatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        width: 40px;
        height: 40px;
    }
`;
