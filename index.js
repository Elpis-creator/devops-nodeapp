
const http = require("node:http");
const { Client } = require("pg");

const PORT = process.env.PORT || 3000;

const client = new Client({
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB || "mydb",
});

let dbConnected = false;

async function connectDatabase() {
  try {
    await client.connect();
    dbConnected = true;
    console.log("Connected to PostgreSQL!");
  } catch (error) {
    console.error("PostgreSQL connection error:", error.message);
  }
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`
    <html>
      <head><title>DevOps Lab</title></head>
      <body style="font-family:Arial;text-align:center;padding:80px">
        <h1>DevOps Lab</h1>
        <h2>Docker + PostgreSQL</h2>
        <p>CI/CD deployment updated successfully!</p>
        <p>Database: ${dbConnected ? "Connected" : "Disconnected"}</p>
      </body>
    </html>
  `);
});

if (require.main === module) {
  connectDatabase();

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = server;
