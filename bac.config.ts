import IConfig from "bacjs/lib/src/server/config";
import {Request, ResponseToolkit} from "hapi";

let appConfig: IConfig

export default appConfig = {
    routers: [
        {prefix: "/api", route: "./controllers/food"},
    ],

    port: 5500,

    mongo: {
        connection: "mongodb://localhost/foodServer"
    },

    typeScript: {
        outDir: "///out/"
    }
};
