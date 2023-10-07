import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Comments} from "./pages/Comments";
import {MainLayout} from "@/components/MainLayout";
import {GlobalStyle} from "./styles/global";
import Theme from "./styles/theme";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Theme>
                <MainLayout>
                    <Comments />
                </MainLayout>
                {/* <ReactQueryDevtools /> */}
                <GlobalStyle />
            </Theme>
        </QueryClientProvider>
    );
}

export default App;
