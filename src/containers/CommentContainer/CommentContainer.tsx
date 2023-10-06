import axios from "axios";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {Comment, Pagination} from "@/types/comment";
import {RoutesApi} from "@/constants/routesApi";
import {CommentList} from "@/components/CommentList";

async function fetchAuthors() {
    const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}${RoutesApi.AUTHORS}`,
    );

    return data;
}
async function fetchCommentsByPage({pageParam = 1}) {
    const {data} = await axios.get<Pagination<Comment[]>>(
        `${import.meta.env.VITE_API_URL}${RoutesApi.COMMENTS}`,
        {params: {page: pageParam}},
    );

    return data;
}

function CommentContainer() {
    const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
        useInfiniteQuery<Pagination<Comment[]>>({
            queryKey: ["comments"],
            queryFn: fetchCommentsByPage,
            getNextPageParam: ({pagination}) =>
                pagination.total_pages !== pagination.page &&
                pagination.page + 1,
        });

    const {data: authors} = useQuery({
        queryKey: ["authors"],
        queryFn: fetchAuthors,
    });
    if (isLoading) {
        return <div>loading...</div>;
    }

    const handleClick = () => {
        fetchNextPage();
    };

    return (
        <>
            <div>
                {data?.pages.map(({pagination, data: comments}) => (
                    <CommentList
                        key={pagination.page}
                        comments={comments}
                        authors={authors}
                    />
                ))}
            </div>
            <button
                type="button"
                onClick={handleClick}
                disabled={isFetchingNextPage || !hasNextPage}
            >
                Загрузить еще
            </button>
        </>
    );
}

export default CommentContainer;
