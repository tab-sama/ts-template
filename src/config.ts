import convict from "convict";

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
