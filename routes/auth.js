import {Router} from 'express'
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth.js';
import {check} from 'express-validator'
import { validarCampos } from '../middlewares/validar-campos.js';
import {validarJWT} from '../middlewares/validar-jwt.js'

const router = Router();

router.post('/new',[
    check('name','El "name" es obligatorio').not().isEmpty(),
    check('email','No es un email').isEmail(),
    check('password','El password necesita al menos 6 caracteres').isLength({min:6}),
    validarCampos
],crearUsuario);

router.post('/',[
    check('email','No es un email').isEmail(),
    check('password','El password necesita al menos 6 caracteres').isLength({min:6}),
    validarCampos
],loginUsuario);

router.get('/renew',validarJWT,revalidarToken);

export default router;