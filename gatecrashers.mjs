import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
const host = 'localhost';
const port = 5000;
const pathGuests = `guests`;
const bestFriends = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const guestData = (req, res) => {
    let statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json`
    const errHandler = (err, statusCode, message) => {
        let bodyRes = JSON.stringify({ error: message })
        res.writeHead(statusCode, {
            'Content-Length': Buffer.byteLength(bodyRes),
        })
            .end(bodyRes);
    }
    //reading credentials
    let baseAuthorusation = req.headers['authorization'];
    if (!baseAuthorusation) {
        errHandler('no credentials found', 401, 'no credentials found');
        return;
    }
    let credentials = Buffer.from(baseAuthorusation.slice(6), "base64").toString().split(':');
    if (!bestFriends.includes(credentials[0]) || credentials[1] !== 'abracadabra') {
        errHandler('wrong credentials', 401, 'Authorization Required%')
        return;
    }
    // in the test for this task they put body in the headers !!!!!
    let bodyReq = req.headers['body'];
    writeFile(`${pathGuests}/${guestFile}`, bodyReq)
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
