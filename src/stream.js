const fs = require('fs');
const watcher = fs.watch('../data');
watcher.on('change',function(event,fileName){
    console.log(`${event} on file ${fileName}`);
});
