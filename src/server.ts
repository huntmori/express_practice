import express, {Request, Response} from "express"

class Server
{
    private app:express.Application;

    //생성자
    constructor()
    {
        this.app = express();

        this.router();
    }

    public getInstance()
    {
        return this.app;
    }

    private router()
    {
        this.app.get('/', (request:Request, response:Response)=>{
            response.send("hey node, hello");
        });
    }
}

export default Server;