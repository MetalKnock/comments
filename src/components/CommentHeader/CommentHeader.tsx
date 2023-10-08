import {useTheme} from "styled-components";
import {LikeIcon} from "@/components/UI/Icons/LikeIcon";
import {LikeWrapper, StyledRow, TotalText} from "./CommentHeader.styled";
import {numberWithSpaces} from "@/utils/numbers";

interface CommentHeaderProps {
    totalComments: number;
    totalLikes: number;
}

function CommentHeader({totalComments, totalLikes}: CommentHeaderProps) {
    const theme = useTheme();

    return (
        <StyledRow>
            <TotalText>{`${numberWithSpaces(
                totalComments,
            )} комментариев`}</TotalText>
            <LikeWrapper>
                <LikeIcon
                    size={22}
                    linearGradient={[
                        theme.palette.secondary.main,
                        theme.palette.secondary.main,
                    ]}
                />
                <TotalText>{numberWithSpaces(totalLikes)}</TotalText>
            </LikeWrapper>
        </StyledRow>
    );
}

export default CommentHeader;
