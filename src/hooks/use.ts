import {useInfiniteQuery} from "@tanstack/react-query";
import {fetchCommentsByPage} from "@/services/comment.services";
import {Comment, Pagination} from "@/types/comment.types";

export function useInfiniteCommentLoader() {
    const props = useInfiniteQuery<Pagination<Comment[]>>({
        queryKey: ["comments"],
        queryFn: fetchCommentsByPage,
        getNextPageParam: ({pagination}) =>
            pagination.total_pages !== pagination.page && pagination.page + 1,
        refetchOnWindowFocus: false,
    });

    return {
        ...props,
    };
}

// const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
//         useInfiniteCommentLoader();
