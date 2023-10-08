import axios from "axios";
import {RoutesApi} from "@/constants/routesApi";
import {Comment, Pagination} from "@/types/comment.types";
import {DEFAULT_PAGE} from "@/constants/common";

export async function fetchCommentsByPage({pageParam = DEFAULT_PAGE}) {
    const {data} = await axios.get<Pagination<Comment[]>>(
        `${import.meta.env.VITE_API_URL}${RoutesApi.COMMENTS}`,
        {params: {page: pageParam}},
    );

    return data;
}
