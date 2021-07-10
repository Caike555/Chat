import express from "express";
import ReturnAction from "../interfaces/ReturnAction";
import jwt from 'jsonwebtoken';
import setUserJWT from "../../utils/Server/setUserJWT";
import getUserInfo  from "../../utils/Server/getUserInfo";
import config from "../../../../config/config";

async function Server_Login(email: string, password: string) {
    return new Promise(async (resolve, reject) => {
        let secretKey = await getUserInfo(email, password);

        if(secretKey == undefined)
            return resolve(undefined);

        let token: string = jwt.sign({ email: email, secretKey: '' }, config.keys.JWT_PRIVATE_KEY);    
    
        resolve(token);
    })
}

export default function Login(req: express.Request, res: express.Response): Promise<ReturnAction> {
    return new Promise<ReturnAction> (async (resolve, reject) => {
        let returnData: ReturnAction = {
            layout: 'main',
            return_type: 'login',
            error: false,
            error_text: 'Something went wrong.',
            success_text: 'You have logged in succesfully.',
            redirect_error: '/Login',
            redirect_success: '/Chat'
        }

        let ServerResponse = await Server_Login(req.body.email, req.body.password);

        if(ServerResponse == undefined)
        {
            returnData.error = true;
            returnData.error_text = "Wrong Email or Password";
        }
        else {
            res.cookie("token", ServerResponse, { maxAge: 900000, httpOnly: true });
        }

        resolve(returnData);
    })

}