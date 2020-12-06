import express from 'express'
const router = express.Router();
import opc from './opc'

router.use("/api/opc", opc);

export default router;





