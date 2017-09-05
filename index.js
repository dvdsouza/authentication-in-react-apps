/*
* @Author: David Souza
* @Date:   2017-09-05 08:37:07
* @Last Modified by:   David Souza
* @Last Modified time: 2017-09-05 08:44:05
*/

const express = require('express');

const app = express()
//tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
