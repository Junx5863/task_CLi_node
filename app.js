require('colors');

const { inquirerMenu, pause } = require('./src/helpers/inquier');

console.clear();


const main = async (params) => {
    console.log('Hello World'.green);
    
    let opt = '';
    do{
        opt = await inquirerMenu();

        if(opt !== '0') await pause();


    }while(opt !== '0');
}

main();