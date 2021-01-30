class SocketsBuilder{
    constructor({ socketUrl}){
        this.socketUrl = socketUrl;
        this.onUserConnected = () => {};
        this.onUserDisconnected = () => {};
    }

    setOnUserConnected(fn){
        this.setOnUserConnected = fn;

        return this;
    }

    setOnUserDisconnected(fn){
        this.setOnUserDisconnected = fn;

        return this;
    }

    build() {
        console.log('passei no build');
        const socket = io.connect(this.socketUrl, {
            withCredentials: false
        });

        socket.on('user-connected', this.setOnUserConnected);
        socket.on('user-disconnected', this.setOnUserDisconnected);

        return socket;
    }
}