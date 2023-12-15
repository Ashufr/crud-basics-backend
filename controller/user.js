const userModal = require('../models/User');

createUser = async (req, res) => {
    try {
        const user = await userModal.create(req.body);
        console.log(user);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) => {
    let user = null;
    try {
        user = await userModal.findById(req.params.id);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(user);
}

const updateUser = async(req, res) => {
    let user = null;
    try {
        user = await userModal.findByIdAndUpdate(req.params.id, req.body);
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(user);
}

const deleteUser = async (req, res) => {
    let user = null;
    try {
        user = await userModal.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(user);
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}