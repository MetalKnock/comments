import {ErrorBoundary} from "react-error-boundary";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {MainLayout} from "@/components/MainLayout";
import {GlobalStyle} from "./styles/global";
import Theme from "./styles/theme";

const queryClient = new QueryClient();

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <QueryClientProvider client={queryClient}>
                <Theme>
                    <MainLayout>
                        <CommentsPage />
                    </MainLayout>
                    <ReactQueryDevtools />
                    <GlobalStyle />
                </Theme>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
