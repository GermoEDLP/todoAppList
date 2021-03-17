const fs = require('fs');


const guardarArchivo = (data) => {

    const path = './db/data.json';

    fs.writeFileSync(path, JSON.stringify(data))
};


module.exports = {
    guardarArchivo
};