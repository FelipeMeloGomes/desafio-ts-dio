// Router dom
import { BrowserRouter } from "react-router-dom";

// Pages

import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./context/AppContext";
import { MainRoutes } from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <ChakraProvider>
                    <Layout>
                        <MainRoutes />
                    </Layout>
                </ChakraProvider>
            </AppContextProvider>
        </BrowserRouter>
    );
};

export { App };
