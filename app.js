import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import dotenv from 'dotenv'


dotenv.config()
const app = express();
app.use(express.json());


app.use("/api/user",router)
app.use("/api/blog", blogRouter)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB_URL)
.then( () => {
    app.listen(5000) 
})
.then( () => {
    console.log("connected to database and listening to localhost")
})
.catch( (err) => {
    console.log(err)
})
// app.use("/api", (req, res, next) => {
//     res.send("Hello World")
// })

// app.listen(5000);

