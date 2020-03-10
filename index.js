const net = require('net');

const port = process.env.PORT || 8080;

const server = net
  .createServer((socket) => {
    let raw = '';
    console.log('----- INCOMING REQUEST -----');
    socket.setEncoding('utf-8');
    socket.on('data', (chunk) => {
      raw += chunk;
      if (raw.match(/.+\r\n\r\n.*$/m)) {
        socket.write(['HTTP/1.1 200 OK', 'Content-Type: text/plain', '', 'Request logged!\r\n'].join('\r\n'));
        socket.end();
      }
    });
    socket.on('end', () => {
      console.log(raw);
      console.log('----------------------------');
    });

    socket.on('error', (err) => {
      throw err;
    });
  })
  .on('error', (err) => {
    throw err;
  });

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

server.listen(port, () => console.log(`HTTP Dumper started @ http://localhost:${port}`));

function cleanup() {
  server.close();
}
