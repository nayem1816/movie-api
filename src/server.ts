import config from "./config";
import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

process.on("uncaughtException", (error) => {
  console.log("UNCAUGHT EXCEPTION! 🧨 Shutting down...");
  console.log("Name:", error.name, "🛠 ", "Message:", error.message);
  process.exit(1);
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database connected successfully.");

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect to MongoDB.");
  }
}

process.on("unhandledRejection", (error) => {
  if (server) {
    console.log("UNHANDLED REJECTION! 🧨 Shutting down...");
    console.log(error);
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM is received");
  if (server) {
    server.close();
  }
});
