const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <html>
      <head><title>DevOps Lab</title></head>
      <body style="font-family:Arial;text-align:center;padding:80px">
        <h1>DevOps Lab</h1>
        <h2>Deployment successful!</h2>
        <p>Node.js application running on AWS EC2</p>
      </body>
    </html>
  `);
});

if (require.main === module) {
  server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = server;
