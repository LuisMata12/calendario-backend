import bcrypt from 'bcryptjs'
import Usuario from '../models/Usuario.js'
import generarJWT from '../helpers/jwt.js';



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

        // Generar JWT
        const token = await generarJWT(usuario.id,usuario.name)
    
        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        })

    } catch (error) {
        res.status(500).json ({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
};

const loginUsuario = async (req,res)=>{

    const {email,password} = req.body;

    try {

        // validar correo
        const usuario = await Usuario.findOne({email:email});
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe'
            })
        }
        // Validar contraseña :)
        const validarPassword = bcrypt.compareSync(password,usuario.password);
        if(!validarPassword){
            return res.status(400).json({
                ok:false,
                msg:"Password incorrecto"
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id,usuario.name)

        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        })

    } catch (error) {

            res.status(500).json ({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
};

const revalidarToken = async (req,res)=>{

    const uid = req.uid;
    const name = req.name;

    const token = await generarJWT(uid,name);


    res.status(200).json({
        ok:true,
        token
    })
};

export {
    crearUsuario,
    loginUsuario,
    revalidarToken
}