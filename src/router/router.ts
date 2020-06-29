import express, {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get("/", (request:Request, response:Response, next:NextFunction)=>{
    response.send("src/router/router.ts");
});

export = router;