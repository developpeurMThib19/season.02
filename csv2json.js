const fs = require('fs')
const readline = require('readline')

function csv2json(filename){
    const input = fs.createReadStream(filename)
    const rl = readline.createInterface({ input })

    let lineCount = 0 

    rl.on('line', (line) =>{
        if (lineCount === 0){
            let str = '[name: Frédéric Francois Chopin , birth: 1810-03-01 , death: 1849-10-17 , activities: composer,pianist]';
            let sp = str.split(',');
            console.log(sp);
        }
        console.log(`line(${lineCount}):`, line)
        lineCount++
    })
}

csv2json('./argument.csv')


