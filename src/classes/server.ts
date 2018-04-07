import * as fs from "fs";
import { Config } from "../interfaces/config";
import * as express from "express";

export class Server {
    private _app: express.Application;

    public start(): void {
        this._app.listen(this._config.appPort);
        console.log(`Server started at port ${this._config.appPort}`);
    }
    constructor(private _config: Config) {
        this._app = express();
    }
}