import express from "express"
import cors from "cors"

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import entryRoutes from "./routes/entries.js"

const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/contact_form/entries', entryRoutes)
app.use('/users', userRoutes)

app.use((req, res, next) => {
  res.status(404).json({message: "not found"})
})

app.listen(port, () => console.log(`API server running on http://localhost:${port}`))