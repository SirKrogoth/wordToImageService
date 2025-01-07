import app from './app';

(async () => {
    try {
        const port = parseInt(`${process.env.PORT}`);

        app.listen(port, () => {
            console.log("O serviço de nome: account-service está em execução na PORTA " + port);
        })
    } catch (error) {
        console.error("Falha ao rodar o server.");
    }
})();