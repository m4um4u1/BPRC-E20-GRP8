export class Node {

    private readonly _name;
    private readonly _nodeId;
    private readonly _value;

    constructor(name, nodeId, value) {
        this._name = name;
        this._nodeId = nodeId;
        this._value = value;
    }

    get name() {
        return this._name;
    }

    get nodeId() {
        return this._nodeId;
    }

    get value() {
        return this._value;
    }
}
