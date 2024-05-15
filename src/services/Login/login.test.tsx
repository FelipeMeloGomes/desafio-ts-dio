import { Login } from "../Login";

describe("login", () => {
    const mockEmail = "felipemelo@gmail.com";

    it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
        const response = await Login(mockEmail);
        expect(response).toBeTruthy();
    });

    it("Deve exibir um erro caso o email seja inválido", async () => {
        const response = await Login("emailinvalido@gmail.com");
        expect(response).toBeFalsy();
    });
});
