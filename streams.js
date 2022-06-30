// importing the file system module 
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// listening to the data event (chunk)
// this is the long way to do what piping will allow us to do.
readStream.on('data', (chunk) => {
    console.log('------ NEW CHUNK -------')
    console.log(chunk)
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk)
})


// piping:
readStream.pipe(writeStream);

// extra credit: look into the duplex stream.
