# README

IOTA first steps. Generate and send a transaction with a simple message and zero value. Afterwards receive the transaction by its hash.

## Run code

```bash

npm install

node send.js <RECIPIENT> <MESSAGE>
node receive.js <TX_HASH>

```

### Example

```bash
node send.js WKB9AOXEARLQVQV9LDKMADOZIZBFXBQY9KOQTXTKM9THHESWBFKGOGCVGIMCHTM9DBSAL9SDRBLDYKFGY "hello there"

node receive.js JXUHCDIUQOQJFDJ9RNSRTBNL9QHCZEETUIDRWCZLMUGDZFZPGEJOAZ9ESZJTWXGGNPWBDZSECOFI99999
```