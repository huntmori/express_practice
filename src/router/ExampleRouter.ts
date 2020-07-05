import { Request, Response } from 'express'
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core'
import { Logger } from '@overnightjs/logger'

@Controller('api')
export class ExampleRouter
{
    @Get(':msg')
    private getMessage(request :Request, response:Response)
    {
        Logger.Info(request.params.msg);

        response.status(200).json({
            message: request.params.msg,
        });
    }

    @Put(':msg')
    private putMessage(request:Request, response:Response)
    {
        Logger.Info(request.params.msg);
        return response.status(400).json({
            error:request.params.msg,
        });
    }

    @Post(':msg')
    private postMessage(request:Request, response:Response)
    {
        Logger.Info(request.params.msg);
        return response.status(400).json({
            error: request.params.msg
        });
    }

    @Delete(':msg')
    private deleteMessage(request:Request, response:Response)
    {
        try{
            throw new Error(request.params.msg);
        }catch(err){
            Logger.Err(err, true);
            return response.status(400).json({
                error: request.params.msg,
            });
        }
    }
}
