import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Comments} from "./pages/Comments";
import {MainLayout} from "@/components/MainLayout";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <Comments />
            </MainLayout>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
