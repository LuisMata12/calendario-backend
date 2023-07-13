

const validarJWT=(req,res,next)=>{

    const token = req.header('x-token');

    console.log(token)
    next()

}

export {
    validarJWT
}