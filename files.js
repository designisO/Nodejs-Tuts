// importing the file system core module
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');

// writing files
fs.writeFile('./docs/blog1.txt', 'Greeting, Im writing to the blog', () => {
    console.log('file was written')
})

fs.writeFile('./docs/blog2.txt', 'Greeting, Im writing to the blog #2 ', () => {
    console.log('file was written')
})

// directories
// if existSync checks to see if the dir is already created
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}


// deleting files
if (!fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}
