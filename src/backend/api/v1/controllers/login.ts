import express from "express";
import logging from "../../../config/logging";

import Login from "../handlers/login/login";
import ReturnAction from "../handlers/interfaces/ReturnAction";

const Page = 'login';
const NAMESPACE = `${Page} Controller`;

const login_get = (req: express.Request,  res: express.Response, next: express.NextFunction) => {
    logging.Log(NAMESPACE, `{GET} ${Page} page requested by: ${req.ip}`, 0);
    return res.render(`${Page}`, {layout: 'main'});

}

const login_post = async(req: express.Request,  res: express.Response, next: express.NextFunction) => {
    logging.Log(NAMESPACE, `{POST} ${Page} page requested by: ${req.ip}`, 0);
    let returnData: ReturnAction = await Login(req);

    return res.render(`return`, returnData);
}


export {login_get, login_post};