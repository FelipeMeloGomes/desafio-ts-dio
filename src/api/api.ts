const conta = {
    email: "felipemelo@gmail.com",
    password: "felipemelo",
    name: "Felipemelo",
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});
