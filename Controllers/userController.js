import pool from "../config/db.js";

// function for creating users
export const CreateUser = async (req,res) =>{
    const {username , email , password} = req.body;
    try{
       const [row] = await pool.query("INSERT INTO users (username , email , password) VALUES (' becken', 'beckn@gmail.com' , '19739')");
        if(!username || !email || !password){
            res.status(401).json({
                message:'invalid input'
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


// function for retrieving all users


export const getAlluser = async(req,res) => {
    try{
       const [row] = await pool.query("SELECT * FROM users");
       res.status(201).json({
         message:"Data retrieved",
         Data:row
       });
    }
 catch(error){
     res.status(500).json({
         error:error.message
     });
   }};

// function for deleting 

export const deleteUser=async (req,res)=>{

    const {id}=req.params;

    try{
        const [row] = await pool.query("DELETE FROM users WHERE id= ?",[id]);


       if(row.affectedRows===0){
        res.status(400).json({
            message:"not found"
          })
       }

       res.status(201).json({
        message:"data deleted"
       })
    }
 
    catch(error){
        res.status(401).json({
            message:error.message
        });
    }
}
//function of updating data

export const updateUser=async (req,res)=>{   

    const {id}=req.params;

    try{
        const [row] = await pool.query("UPDATE users SET name= ? , email = ? , password = ? WHERE id= ?",[id]);


       if(row.affectedRows===0){
        res.status(400).json({
            message:"not found"
          })
       }

       res.status(201).json({
        message:"data deleted"
       })
    }
 
    catch(error){
        res.status(401).json({
            message:error.message
        });
    }
}
