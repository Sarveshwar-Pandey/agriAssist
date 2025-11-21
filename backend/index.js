
const authRouter = require('./Routes/auth.route')
const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/agriassist',authRouter)

app.listen(PORT, ()=>{
  console.log(`App listening on PORT: ${PORT}`);
})
