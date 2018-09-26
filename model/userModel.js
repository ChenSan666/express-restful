const query = require('./config');

const getUsers = async function () {
    let sql = 'select * from dept';
    let result = await query(sql)
    return result;
}
const addUser = async function (params) {
    let sql = 'insert into dept(dname,loc) VALUES(?,?)';
    let result = await query(sql, params)
    return result;
}
const delUserById = async function (params) {
    let sql = 'delete from dept where deptno=?';
    let result = await query(sql, params)
    return result;
}
const getUserById = async function (params) {
    let sql = "select * from dept where deptno=?";
    let result = await query(sql, params)
    return result;
}
const updateUserById = async function (params) {
    let sql = 'update dept set dname=?,loc=? where deptno=?';
    let result = await query(sql, params)
    return result;
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    delUserById,
    updateUserById,
}