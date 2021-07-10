import express from "express";
import logging from "../../../config/logging";

const Page = 'index';
const NAMESPACE = `${Page} Controller`;

const index = (req: express.Request,  res: express.Response, next: express.NextFunction) => {
    logging.Log(NAMESPACE, `{GET} ${Page} page requested by: ${req.ip}`, 0);

    return res.render(`${Page}`, {layout: 'main'});
}

export default index;