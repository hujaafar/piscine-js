import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
const host = 'localhost';
const port = 5000;
const guestData = (req, res) => {
    let statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json`
    const errHandler = (err) => {
        let bodyRes = JSON.stringify({ error: 'server failed' })
        statusCode = 500;
        res.writeHead(statusCode, {
            'Content-Length': Buffer.byteLength(bodyRes),
        })
            .end(bodyRes);
    }
    // reading the request body
    let bodyReq = [];
    req.on('data', (chunk) => {
        bodyReq.push(chunk);
    }).on('end', () => {
        bodyReq = Buffer.concat(bodyReq).toString();
        // at this point, `body` has the entire request body stored in it as a string
    }).on('error', errHandler);
    writeFile(`guests/${guestFile}`, bodyReq)
        .then(() => {
            let bodyRes = bodyReq;
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(bodyRes),
            })
                .end(bodyRes);
        })
        .catch(errHandler);
}
const server = http.createServer(guestData);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
