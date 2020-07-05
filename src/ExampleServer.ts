import * as bodyParser from 'body-parser'
// import * as exampleRouter from './router/ExampleRouter'
import * as controllers from './router/'
import { Server } from '@overnightjs/core'
import { Logger } from '@overnightjs/logger'

class ExampleServer extends Server
{
    private readonly SERVER_STARTED_MSG = 'Example server started on port:';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.setupController();
    }

    private setupController():void{
        const ctrInstances = [] ;
        
        for(const name in controllers ){
            if( controllers.hasOwnProperty(name)){
                const controller = (controllers as any)[name];
                ctrInstances.push(new controller());
            }
        }
        super.addControllers(ctrInstances);
    }

    public start(port: number): void{
        this.app.get("*", (request, response)=>{
            response.send(this.SERVER_STARTED_MSG+port);
        });
        this.app.listen(port, ()=>{

        });
    }
}

export default ExampleServer;