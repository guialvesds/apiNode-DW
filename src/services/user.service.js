import User from "../models/User.js";

const creatUserService = (body) => {
    return User.create(body);
};

const getUsers = () => {
    return User.find();
}

const getUser = (id) => {
    return User.findById(id);
}

const editUser = (id, body) => {
    return User.findByIdAndUpdate({ _id: id }, { body })
}

export default {
    creatUserService,
    getUsers,
    getUser,
    editUser
}