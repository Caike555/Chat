import express from "express";
import logging from "../../../config/logging";
import Register from "../handlers/register/register";
import ReturnAction from "../handlers/interfaces/ReturnAction";

const Page = 'register';
const NAMESPACE = `${Page} Controller`;

const register_get = (req: express.Request,  res: express.Response, next: express.NextFunction) => {
    logging.Log(NAMESPACE, `{GET} ${Page} page requested by: ${req.ip}`, 0);
    return res.render(`${Page}`, {layout: 'main'});
}

const register_post = async (req: express.Request,  res: express.Response, next: express.NextFunction) => {
    logging.Log(NAMESPACE, `{POST} ${Page} page requested by: ${req.ip}`, 0);

    let returnData: ReturnAction = await Register(req);

    return res.render(`return`, returnData);
}


export {register_get, register_post};