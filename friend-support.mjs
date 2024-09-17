import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
const host = 'localhost';
const port = 5000;
const guestData = (req, res) => {
    let statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json` 
    readFile(`guests/${guestFile}`)
        .then((guestInformation) => {
            let body = guestInformation.toString();
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(body),
            })
                .end(body);
        })
        .catch((err) => {
            let body;
            if (err.code === "ENOENT") {
                body = JSON.stringify({ error: 'guest not found' })
                statusCode = 404;
            } else {
                body = JSON.stringify({ error: 'server failed' })
                statusCode = 500;
            }
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(body),
            })
                .end(body);
        });
}
const server = http.createServer(guestData);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
