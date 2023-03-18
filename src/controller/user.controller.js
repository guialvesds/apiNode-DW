
import userService from "../services/user.service.js";

const create = async (req, res) => {
    try {

        const { primaryname, secondname, email, password } = req.body;

        if (!primaryname || !secondname || !email || !password) {
            return res.status(400).send({ message: "Todos os campos são obrigatórios!" });
        }

        const user = await userService.creatUserService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Aconteceu algo, usuário não cadastrado. Tente novamente!" });
        }

        return res.status(200).send({ message: "Usuário criado com sucesso!", user })

    } catch (error) {
        return res.status(500).send({ message: "Ops, não foi possível criar a sua conta." });
    }
}

export default {
    create,
}