import express, {Request, Response, NextFunction, response} from 'express';
import router from "./router/router";

const app = express();

app.get("/", (request:Request, reseponse:Response, next:NextFunction)=>{
    response.send('root');
});

app.use('/router', router);

app.listen(3000, ()=>{
    console.log("listen:3000");
});