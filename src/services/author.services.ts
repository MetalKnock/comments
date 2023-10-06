import axios from "axios";
import {RoutesApi} from "@/constants/routesApi";

export async function fetchAuthors() {
    const {data} = await axios.get(
        `${import.meta.env.VITE_API_URL}${RoutesApi.AUTHORS}`,
    );

    return data;
}
