import express from "express";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/users",userRoutes);
app.get('/',(req , res) => {
    res.status(200).json({
        message:'server is running',
        author:"micah",
        status:200
    });
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
