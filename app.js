'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Decoding_sektio_nugroho!\n')
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding_sektio_nugroho.
*/

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)