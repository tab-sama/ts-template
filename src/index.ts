import { config } from "./config.js";

const server = Bun.serve({
	port: config.port,
	fetch(request) {
		const url = new URL(request.url);

		if (url.pathname === "/health") {
			return new Response(
				JSON.stringify({
					status: "ok",
					timestamp: new Date().toISOString(),
					uptime: process.uptime(),
				}),
				{
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		return new Response(null, { status: 404 });
	},
});

// biome-ignore lint/suspicious/noConsole: it's just an example we don't want to add a logger for it
console.info(`Server running at http://localhost:${server.port}`);
