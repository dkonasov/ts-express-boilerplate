import { Server } from "./classes/server";
import { Config } from "./interfaces/config";
import * as fs from "fs";

console.log("loading config...");
const config: Config = JSON.parse(fs.readFileSync(`${__dirname}/../config/config.json`).toString());
console.log('config loaded');
const server = new Server(config);
server.start();