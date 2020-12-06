import { OPCUAClient, MessageSecurityMode, SecurityPolicy, ClientSession } from 'node-opcua'

const connectionStrategy = {
    initialDelay: 1000,
    maxRetry: 1
};

export default class OpcuaClient {

    private client: OPCUAClient;
    private endpointUrl: string = "opc.tcp://127.0.0.1:4840";

    public constructor() {
        this.client = OPCUAClient.create({
            applicationName: "B&R Cube",
            connectionStrategy: connectionStrategy,
            securityMode: MessageSecurityMode.None,
            securityPolicy: SecurityPolicy.None,
            endpoint_must_exist: false
        })
    }

    private async connectClient() {
        await this.client.connect(this.endpointUrl);
        console.log("connected !");
    }

    public async disconnectClient() {
        await this.client.disconnect();
        console.log("disconnected !");
    }

    private async createSession(): Promise<ClientSession> {
        return await this.client.createSession();
    }

    public async _init(): Promise<ClientSession> {
        await this.connectClient();
        return await this.createSession();
    }
};



