const express = require("express")
const router = express.Router()
const { registerUser, getAllUser, deleteUser, updateUser } = require("./controller")



router.post("/register", registerUser)
router.get("/users", getAllUser)
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser)

module.exports = router