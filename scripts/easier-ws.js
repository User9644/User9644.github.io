class EasierWS {

    url;
    socket;
    connected = false;
    autoReconnect = false;
    connecting = () => {};
    onopen = (ev) => {
        this.connected = true;
    };
    onclose = (ev) => {
        this.connected = false;
        this.reconnect(ev.code);
    };
    onmessage = (ev) => {
        const msg = JSON.parse(ev.data);

        switch(msg.type) {
            // please disconnect ----------- just for testing
            case "please-disconnect":
                disconnect(msg.value);
                break;
        }
    };

    /**
     * @param {String} url e.g. "ws://127.0.0.1:3000/"
     */
    constructor(url) {
        this.url = url;

        this.connect();
    }

    setAutoReconnect = function(bool) {
        this.autoReconnect = bool;
    }

    reconnect = function(code) {
        let time = 60;
        if(code == 1000) time = 60 * 5;

        setTimeout(() => {this.connect()}, time * 1000);
    }

    connect = function() {
        if(this.connected) {
            console.warn("Already connected to the Server.");
            return;
        };
        this.connecting();
        this.socket = new WebSocket(this.url);
        this.socket.onopen = (ev) => {this.onopen(ev)};
        this.socket.onclose = (ev) => {this.onclose(ev)};
        this.socket.onmessage = (ev) => {this.onmessage(ev)};
    }
    disconnect = function(code, reason) {
        this.socket.close(code || 1000, reason);
    }

    send = function(message) {
        const msg = { type: "m", value: message};

        this.socket.send(JSON.stringify(msg));
    }
    /**
     * @access private
     */
    sendCustom = function(msg) {
        this.socket.send(JSON.stringify(msg));
    }

    on = function(type, listener) {
        switch(type) {

            // onconnecting
            case "connecting":
                this.connecting = () => {
                    console.info("connecting");
                    listener(0);
                };
                break;

            // onopen
            case "open":
                this.onopen = (ev) => {
                    console.info("open");
                    this.connected = true;

                    listener(ev);
                };
                break;

            // onclose
            case "close":
                this.onclose = (ev) => {
                    console.info("close");
                    this.connected = false;

                    this.reconnect(ev.code);

                    listener(ev);
                };
                break;

            // onmessage
            case "message":
                this.onmessage = (ev) => {
                    console.info("message");
                    const msg = JSON.parse(ev.data);

                    switch(msg.type) {
                        // please disconnect ----------- just for testing
                        case "please-disconnect":
                            this.disconnect(msg.value);
                            break;

                        // normal message
                        case "m":
                            listener(msg.value);
                            break;
                    }
                };
                break;
        }
    }
}