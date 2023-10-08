import {useQuery} from "@tanstack/react-query";
import {AUTHOR_QUERY_KEY} from "@/constants/query";
import {fetchAuthors} from "@/services/author.services";
import {Author} from "@/types/author.types";

export function useAuthors() {
    const props = useQuery<Author[]>({
        queryKey: AUTHOR_QUERY_KEY,
        queryFn: fetchAuthors,
        refetchOnWindowFocus: false,
    });
    return {...props};
}
