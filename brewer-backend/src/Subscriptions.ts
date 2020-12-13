import { ClientSubscription, ReadValueIdLike, AttributeIds, MonitoringParametersOptions, ClientMonitoredItem, TimestampsToReturn, DataValue } from "node-opcua";
import OpcuaClient from "./OpcuaClient";

export class Subscriptions {

    private session;

    private subscription;

    private client;

    private valueMap = new Map();

    constructor() {
        this.client = new OpcuaClient();
    }

    public async getValue() {
       this.session = await this.client._init();

        this.subscription = ClientSubscription.create(await this.session, {
            requestedPublishingInterval: 1000,
            requestedLifetimeCount: 100,
            requestedMaxKeepAliveCount: 10,
            maxNotificationsPerPublish: 100,
            publishingEnabled: true,
            priority: 10
        });

        this.subscription
            .on("started", function() {
                console.log(
                    "subscription started for 2 seconds - subscriptionId=",
                    this.subscriptionId
                );
            })
            .on("keepalive", function() {
                console.log("keepalive");
            })
            .on("terminated", function() {
                console.log("terminated");
            });

        const valueToMonitor: ReadValueIdLike = {
            nodeId: "ns=6;s=::Program:Cube.Command.Parameter[0].Value",
            attributeId: AttributeIds.Value
        };

        const parameters: MonitoringParametersOptions = {
            samplingInterval: 100,
            discardOldest: true,
            queueSize: 10
        };

        const batchValueItem = ClientMonitoredItem.create(
            this.subscription,
            valueToMonitor,
            parameters,
            TimestampsToReturn.Both
        );

        batchValueItem.on("changed", (dataValue: DataValue) => {
            const dv = dataValue.value.value;
        });
    }
}
