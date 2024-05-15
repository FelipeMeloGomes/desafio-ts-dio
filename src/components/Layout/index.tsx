import { Box } from "@chakra-ui/react";
import { Header } from "../Header";

const Layout = ({ children }: any) => {
    return (
        <Box minHeight="100vh" backgroundColor="#9413dc">
            <Header />
            {children}
        </Box>
    );
};

export { Layout };
