const userModel= require('../model/userModel')

const getUsers = async function (req, res) {
    let result = await userModel.getUsers();
    res.json(result)
}
const addUser = async function (req, res) {
    console.log(req.body);
    let {dname, loc} = req.body;
    let result = await userModel.addUser([dname, loc]);
    res.json(result)
}
const delUserById = async function (req, res) {
    let result = await userModel.delUserById([req.params.id]);
    res.json(result)
}
const getUserById = async function (req, res) {
    let result = await userModel.getUserById(req.params.id);
    res.json(result)
}
const updateUserById = async function (req, res) {
    let {dname, loc} = req.body;
    let result = await userModel.updateUserById([dname, loc, req.params.id]);
    res.json(result)
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    delUserById,
    updateUserById,
}
