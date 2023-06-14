import {validationResult} from 'express-validator'

const crearUsuario =(req,res)=>{

    const {name,email,password} = req.body;

    res.status(201).json({
        ok:true,
        msg:"registro",
        name,
        email,
        password
    })
};

const loginUsuario =(req,res)=>{
    const {email,password} = req.body;

    res.status(200).json({
        ok:true,
        msg:"login",
        email,
        password
    })
};

const revalidarToken =(req,res)=>{
    res.status(200).json({
        ok:true,
        msg:"renew"
    })
};

export {
    crearUsuario,
    loginUsuario,
    revalidarToken
}