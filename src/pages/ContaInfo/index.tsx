import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Text fontSize="xxl" fontWeight="bold">
                Informações da conta
            </Text>
            <Link to="/conta/1">
                <Text>Conta</Text>
            </Link>
        </>
    );
};

export { ContaInfo };
