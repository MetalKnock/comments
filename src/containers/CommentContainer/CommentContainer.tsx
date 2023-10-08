import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment.types";
import {CommentList} from "@/components/CommentList";
import {fetchAuthors} from "@/services/author.services";
import {fetchCommentsByPage} from "@/services/comment.services";
import {Author} from "@/types/author.types";
import {CommentHeader} from "@/components/CommentHeader";
import {ReactComponent as LoadingIcon} from "@/assets/icons/loader.svg";
import {
    CommentListWrapper,
    StyledButton,
    StyledLoadingIcon,
} from "./CommentContainer.styled";

function CommentContainer() {
    const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
        useInfiniteQuery<Pagination<Comment[]>>({
            queryKey: ["comments"],
            queryFn: fetchCommentsByPage,
            getNextPageParam: ({pagination}) =>
                pagination.total_pages !== pagination.page &&
                pagination.page + 1,
            refetchOnWindowFocus: false,
        });

    const {data: authors, isLoading: isLoadingAuthors} = useQuery<Author[]>({
        queryKey: ["authors"],
        queryFn: fetchAuthors,
        refetchOnWindowFocus: false,
    });

    if (isLoading && isLoadingAuthors) {
        return <LoadingIcon />;
    }

    if (!data || !authors) {
        return <div>Данные не найдены</div>;
    }

    const handleClick = () => {
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
                    onClick={handleClick}
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
