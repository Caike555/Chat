import express from "express";
import ReturnAction from "../interfaces/ReturnAction";

export default function Register(req: express.Request): Promise<ReturnAction> {
    return new Promise<ReturnAction> ((resolve, reject) => {

        let CollectedData: ReturnAction = {
            layout: 'main',
            return_type: 'signup',
            error: false,
            error_text: 'Something went wrong.',
            success_text: 'You have registered succesfully.',
            redirect_error: '/Signup',
            redirect_success: '/Chat'
        }
        resolve(CollectedData);
    })

}