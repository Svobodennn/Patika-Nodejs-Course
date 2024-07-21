// Promise

function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Getting data...");

        if (data){
            resolve("Data received succesfully.");
        }
        else {
            reject("Couldn't receive the data");
        }
    })
}

function cleanData(receivedData){
    return new Promise((resolve, reject) => {
        console.log("Cleaning data...");

        if (receivedData){
            resolve("Data cleaned succesfully.");
        }
        else {
            reject("Couldn't clean the data");
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(false);
//     }).then(result => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err)
//     })


// Async - Await

async function processData(){

    try {
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    } catch (error) {
        console.log(error);
    }
    
}

// processData();


// Example

const books = [
    {name: "book 1", author: "author 1"},
    {name: "book 2", author: "author 2"},
    {name: "book 3", author: "author 3"}
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
}

const addBook = (newBook) => {
    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
    })
    return promise2;
}


async function showBooks(){
    try {
        await addBook({name: "book 4", author: "author 4"}),
        listBooks();
        
    } catch (error) {
        console.log('error')
    }
}

showBooks();