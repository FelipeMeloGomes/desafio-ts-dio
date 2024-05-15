import { Box, Input, Text } from "@chakra-ui/react";
import { Login } from "../../services/Login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { DButton } from "../../components/Button";

const Home = () => {
    const [email, setEmail] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
        const loggedIn = await Login(email);

        if (!loggedIn) {
            return alert("Email inválido");
        }

        setIsLoggedIn(true);
        navigate("/conta/1");
    };

    return (
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
                <Text>Faça o login</Text>

                <Input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input placeholder="password" />
                <DButton onClick={() => validateUser(email)} />
            </Box>
        </Box>
    );
};

export { Home };
