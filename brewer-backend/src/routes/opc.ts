import express from 'express'
import { Subscriptions } from "../Subscriptions";

const router = express.Router();
const sub = new Subscriptions()

router.get("/batch/value", async (req, res)=> {
    console.log(sub.batchValue());
});

router.get("/batch/")

export default router;
