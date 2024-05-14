import { login } from "./login";

describe("login", () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = "felipemelo@gmail.com";

    it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith("Bem Vindo");
    });
    it("Deve exibir um erro caso o email seja inválido", async () => {
        await login("teste@gmail.com");
        expect(mockAlert).toHaveBeenCalledWith("Email inválido");
    });
});
