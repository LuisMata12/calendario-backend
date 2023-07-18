import {Router} from 'express'
import { deleteEvents, getEvents, postEvents, putEvents } from '../controllers/events.js';
import { validarJWT } from '../middlewares/validar-jwt.js';


const router = Router()

router.get('/',validarJWT,getEvents)
router.post('/',postEvents)
router.put('/',putEvents)
router.delete('/',deleteEvents)

export default router;

