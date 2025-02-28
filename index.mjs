import express from "express"
import { config } from "dotenv"
const App = express()

config({ path: ".env" })

App.use(express.urlencoded({ extended: true }))
App.use(express.json())
App.post("/", (req, res) => {
    const { body } = req
    console.log(body)
    res.status(404).send(`<h1>this is heading</h1><br><p>this is paragraph</p>`)
})

const middlewar = (req, res, next) => {
    console.log("middlewar", req.body)
    next()
}

App.post("/login", middlewar, (req, res, next) => {
    const { body } = req
    console.log(body)
    res.status(200).json({ success: true }

    )
})
App.listen(process.env.PORT, () => {
    console.log(`server running on : http://localhost:${process.env.PORT}`)
})

