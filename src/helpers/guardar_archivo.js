const fs = require('fs');

const archivo = './src/db/data.json';



const guardarDb = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDb = () =>{
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}


module.exports = {
    guardarDb,
    leerDb,
};