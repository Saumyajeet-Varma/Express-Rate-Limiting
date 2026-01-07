import express from "express"
import rateLimit from "express-rate-limit"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const limiter = rateLimit({
    windowMs: process.env.RATE_LIMIT_WINDOW_MS || 60 * 1000,
    max: process.env.RATE_LIMIT_MAX || 10,
    message: process.env.RATE_LIMIT_MESSAGE || "Request limit exceeded"
})

app.use(limiter);

app.get("/", (req, res) => {
    res.send("Hello, you are within the request limit")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})