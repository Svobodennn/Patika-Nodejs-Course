const fs = require('fs');


//  READ
 fs.readFile('password.txt', 'utf8', (err, data) => {
    if(err)
        console.log(err);

    console.log(data);
    console.log('FILE READ');
 });


//  WRITE
 fs.writeFile('password.txt', 'very secret pw', 'utf8', (err, data) => {
    if(err)
        console.log(err);

    console.log('FILE WRITTEN');
 })
 fs.writeFile('example.json', '{"name": "Yo", "age": 69}', 'utf8', (err, data) => {
    if(err)
        console.log(err);

    console.log('FILE WRITTEN');
 });
 

 // APPEND
 fs.appendFile('example.json', '{"name": "Ye", "age": 31}', 'utf8', (err, data) => {
    if(err)
        console.log(err);

    console.log('DATA APPENDED');
 });

 // REMOVE
 fs.unlink('example.json', (err) => {
    if(err)
        console.log(err)

    console.log("FILE REMOVED");
 });


 // CREATE DIRECTORIES    recursive to create multiple directories uploads, img
 fs.mkdir('uploads/img', {recursive: true}, (err) => {
    if(err)
        console.log(err)

    console.log("DIRECTORIES CREATED");
 });
 // REMOVE DIRECTORIES    recursive to remove multiple directories, false removes only img
 fs.rmdir('uploads/img', {recursive: true}, (err) => {
    if(err)
        console.log(err)

    console.log("DIRECTORIES CREATED");
 });
