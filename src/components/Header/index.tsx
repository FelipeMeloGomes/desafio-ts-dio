import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };
    return (
        <Flex backgroundColor="orange" padding="5px">
            <Box>
                <Text fontSize="xx-large" textAlign="center">
                    Dio Bank
                </Text>
            </Box>

            {isLoggedIn && (
                <>
                    <Spacer />
                    <Button onClick={() => logout()}>Sair</Button>
                </>
            )}
        </Flex>
    );
};

export { Header };
