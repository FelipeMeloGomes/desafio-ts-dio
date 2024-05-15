import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AppContext);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        };

        getData();
    }, []);

    useEffect(() => {
        if (userData && id !== userData.id) {
            navigate("/");
        }
    }, [userData, id, navigate]);

    const actualData = new Date();

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData === undefined || userData === null ? (
                    <Center>
                        <Spinner size="xl" color="white" />
                    </Center>
                ) : (
                    <>
                        <CardInfo
                            mainContent={`Bem vindo ${userData?.name}`}
                            content={`${actualData.getDate()} / ${
                                actualData.getMonth() + 1
                            } /  ${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />
                        <CardInfo
                            mainContent="Saldo"
                            content={`R$ ${userData.balance}`}
                        />
                    </>
                )}
            </SimpleGrid>
        </Center>
    );
};

export { Conta };
