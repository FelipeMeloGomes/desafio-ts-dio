const conta = {
    email: "felipemelo@gmail.com",
    password: "felipemelo",
    name: "Felipemelo",
    balance: "200",
    id: "1",
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});
