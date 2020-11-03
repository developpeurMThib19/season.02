const fs = require('fs')
const readline = require('readline')

function WTFIsThisPipe(){
    fs.readdir(__dirname, (error, files) => {
        for(const filename of files.filter(filename => filename.endsWith('.js'))){
            const input = fs.createReadStream(filename)
            const rl = readline.createInterface({input})
            rl.on('line', (line) => {
                if (/^[\t ]*function/g.test(line)){
                    console.log(line.replace('function', 'I will finish: ').slice(0, -1))
                }
            })
        }
    })
}
WTFIsThisPipe()
