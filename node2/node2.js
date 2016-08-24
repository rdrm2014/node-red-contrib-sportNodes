module.exports = function(RED) {
    function Processor(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.split("").reverse().join("").toLowerCase();
            //this.status({fill:"yellow",shape:"ring",text:"node2.message1" + " " + msg.payload });
            this.status({fill:"yellow",shape:"ring",text: RED._("node2.message1") + " " +  msg.payload });
            node.send(msg);
        });
    }
    RED.nodes.registerType("node2",Processor);
};