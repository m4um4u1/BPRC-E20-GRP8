import express from 'express'
import OpcuaClient from "../OpcuaClient";
import { AttributeIds } from 'node-opcua'
const router = express.Router();

const client = new OpcuaClient()

router.get("/batch/value", async (req, res)=> {
    const session = await client._init();
    const dataValue = await session.read({
        nodeId: "ns=6;s=::Program:Cube.Command.Parameter[0].Value",
        attributeId: AttributeIds.Value
    });
    console.log(" value = ", dataValue.value);
})

router.get("/batch/")

export default router;
