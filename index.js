const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors")
const app = express()
const connectDb = require("./db")
const dotEnv = require("dotenv")
const path = require("path")
const userRoute = require("./route")
dotEnv.config({ path: "./.env" })



connectDb()
app.use(express.json())
app.use(cors())
app.use("/api/v1", userRoute)
app.use(express.static(path.join(__dirname, './build')))




app.use("*", function (req, resp) {
    resp.sendFile(path.join(__dirname, './build/index.html'))
})

const PORT = process.env.PORT || 8000

app.listen(8000, () => {
    console.log(`app is running on ${PORT}`)
})