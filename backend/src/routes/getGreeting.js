const GREETINGS = [
    "Bem-vindo!",
    "Todos a postos!",
    "Traçando o curso à frente!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};