import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/',(request:Request, response:Response, next:NextFunction)=>{
    response.send('hello');
});

app.listen(3000, ()=>{
    console.log('listen to port:3000');
});