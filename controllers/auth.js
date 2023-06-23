import bcrypt from 'bcryptjs'
import Usuario from '../models/Usuario.js'


const crearUsuario =async (req,res)=>{

    const {email,password} = req.body;

    try {

        let usuario = await Usuario.findOne({email:email});
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario ya existe'
            })
        }

        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        usuario.password=hash;

        await usuario.save();
    
        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name
        })

    } catch (error) {
        res.status(500).json ({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
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