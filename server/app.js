require('dotenv').config();
const express = require('express');
const app = express();
const router = new require("./routes/router")
const cors = require('cors')
const PORT = 8006;


app.use(express.json())
app.use(cors());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server start at posrt no :${PORT}`)
})