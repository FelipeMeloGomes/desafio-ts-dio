import { api } from "../../api/api";

const Login = async (email: string): Promise<Boolean> => {
    const data: any = await api;

    if (email !== data.email) {
        return false;
    }

    return true;
};

export { Login };
