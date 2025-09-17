import convict from "convict";
import dotenv from "dotenv";

dotenv.config();

export interface ServerConfig {
	port: number;
}

const configSchema = convict<ServerConfig>({
	port: {
		doc: "The port to bind.",
		format: "port",
		default: 3000,
		env: "PORT",
		arg: "port",
	},
});

configSchema.validate({ allowed: "strict" });

export const config = configSchema.getProperties();
