const fs = require('fs');
const path = require('path');


fs.rm(path.resolve(__dirname, 'main.js'), {encoding: 'utf-8'}, (err) => {
    if (err) {
        console.log(err.message)
    }
})