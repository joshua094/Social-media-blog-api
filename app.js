import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';


const app = express();
app.use(express.json());

app.use("/api/user",router)
app.use("/api/blog", blogRouter)

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:E7S8EhZCMlHB83BT@cluster0.vknoc1r.mongodb.net/Blog?retryWrites=true&w=majority'
)
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

