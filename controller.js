const userModel = require("./model")






// register 
const registerUser = async (req, resp) => {
    try {
        const user = await new userModel(req.body).save()
        resp.status(201).send({
            success: true,
            message: "register successfully",
            user
        })
    } catch (error) {
        resp.status(500).send({
            message: "error while register",
            success: false,
            error
        })
    }
}
//get all user 
const getAllUser = async (req, resp) => {
    try {
        const users = await userModel.find()
        resp.status(200).send({
            success: true,
            message: "users found",
            users
        })
    } catch (error) {
        console.log(error)
        resp.status(500).send({
            message: "error while getting users",
            success: false,
            error
        })
    }
}
// delete user
const deleteUser = async (req, resp) => {
    try {
        const result = await userModel.findByIdAndDelete(req.params.id)
        resp.status(200).send({
            success: true,
            message: "user delete successfully",

        })
    } catch (error) {
        console.log(error)
        resp.status(500).send({
            message: "error while deleting user",
            success: false,
            error
        })
    }
}
// update user 
const updateUser = async (req, resp) => {
    try {
        const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
        resp.status(200).send({
            success: true,
            message: "user updated successfully"
        })
    } catch (error) {
        resp.status(500).send({
            message: "error while updating",
            success: false
        })
        console.log(error)
    }

}

module.exports = {
    registerUser,
    getAllUser,
    deleteUser,
    updateUser
}