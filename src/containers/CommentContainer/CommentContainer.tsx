import {CommentList} from "@/components/CommentList";
import {CommentHeader} from "@/components/CommentHeader";
import {ReactComponent as LoadingIcon} from "@/assets/icons/loader.svg";
import {
    CommentListWrapper,
    StyledButton,
    StyledError,
    StyledLoadingIcon,
} from "./CommentContainer.styled";
import {useInfiniteCommentLoader} from "@/hooks/useInfiniteCommentLoader";
import {useAuthors} from "@/hooks/useAuthors";
import {UNKNOWN_ERROR} from "@/constants/common";

function CommentContainer() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading: isLoadingComments,
        isError: isErrorComments,
        error: commentsError,
    } = useInfiniteCommentLoader();
    const {
        data: authors,
        isLoading: isLoadingAuthors,
        isError: isErrorAuthors,
        error: authorsError,
    } = useAuthors();

    if (isLoadingComments || isLoadingAuthors) {
        return <LoadingIcon />;
    }

    if (isErrorComments) {
        return (
            <StyledError>
                {commentsError instanceof Error
                    ? commentsError.message
                    : UNKNOWN_ERROR}
            </StyledError>
        );
    }

    if (isErrorAuthors) {
        return (
            <StyledError>
                {authorsError instanceof Error
                    ? authorsError.message
                    : UNKNOWN_ERROR}
            </StyledError>
        );
    }

    if (!data || !authors) {
        return <div>Данные не найдены</div>;
    }

    const handleLoadMoreClick = () => {
        fetchNextPage();
    };

    const totalLikes = data.pages.reduce((sum, page) => {
        const likesOnPage = page.data.reduce(
            (acc, comment) => acc + comment.likes,
            0,
        );
        return sum + likesOnPage;
    }, 0);

    const totalComments = data.pages.reduce(
        (sum, page) => sum + page.data.length,
        0,
    );

    return (
        <>
            <CommentHeader
                totalComments={totalComments}
                totalLikes={totalLikes}
            />
            <CommentListWrapper>
                {data.pages.map(({pagination, data: comments}) => (
                    <CommentList
                        key={pagination.page}
                        comments={comments}
                        authors={authors}
                    />
                ))}
            </CommentListWrapper>

            {hasNextPage && (
                <StyledButton
                    type="button"
                    onClick={handleLoadMoreClick}
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? (
                        <StyledLoadingIcon />
                    ) : (
                        "Загрузить еще"
                    )}
                </StyledButton>
            )}
        </>
    );
}

export default CommentContainer;
