import express from "express"

class Server
{
    private app:express.Application;

    //생성자
    constructor()
    {
        this.app = express();
    }

    public getInstance()
    {
        return this.app;
    }
}

export default Server;