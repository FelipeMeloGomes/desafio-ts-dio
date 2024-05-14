import {
    ChakraProvider,
    Input,
    Box,
    Button,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { login } from "./services/login";
import { useState, useEffect } from "react";
import { api } from "./api/api";

interface UserData {
    email: string;
    password: string;
    name: string;
}

const App = () => {
    const [email, setEmail] = useState<string>("");
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        };

        getData();
    }, []);
    return (
        <ChakraProvider>
            <Box minHeight="100vh" backgroundColor="#9413dc" padding="30px">
                <Box
                    backgroundColor="#FFFFFF"
                    borderRadius="25px"
                    padding="15px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="500px"
                    margin="0 auto"
                    gap="30px"
                >
                    <Text>
                        <h1>Faça o login</h1>
                    </Text>
                    {userData === null ||
                        (userData === undefined ?  <Spinner /> : <h1>informações carregadas</h1>)}
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input placeholder="password" />
                    <Button
                        onClick={() => login(email)}
                        colorScheme="teal"
                        size="sm"
                        width="100%"
                        marginTop="5px"
                    >
                        Button
                    </Button>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export { App };
