import axios from "axios";
import {RoutesApi} from "@/constants/routesApi";
import {Comment, Pagination} from "@/types/comment.types";

export async function fetchCommentsByPage({pageParam = 1}) {
    const {data} = await axios.get<Pagination<Comment[]>>(
        `${import.meta.env.VITE_API_URL}${RoutesApi.COMMENTS}`,
        {params: {page: pageParam}},
    );

    return data;
}
