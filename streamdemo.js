const fs = require('fs');
const transformStream= require('stream');
let fileStream= fs.createReadStream(__dirname + "/input.txt");
let outputStream= process.stdout;

//readstream.pipe(writestream)

let middleStream= new transformStream.Transform({
    transform(chunk,enc, nextCB)
    {
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB,5000);
    }
});
let newReadableStream=fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);