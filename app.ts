import { Server } from "bacjs";
import Config from "./bac.config";

async function main() {
	let server = new Server(Config);

	server.start();
}

main()