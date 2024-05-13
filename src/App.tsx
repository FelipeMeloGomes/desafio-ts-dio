import { ChakraProvider, Input, Box, Button, Text } from "@chakra-ui/react";
import { login } from "./services/login";

function App() {
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
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Button
                        onClick={login}
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
}

export default App;
