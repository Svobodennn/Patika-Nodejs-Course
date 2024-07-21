const promise1 = new Promise((resolve, reject) => {
    // resolve('CONNECTED');
     reject('SOMETHING HAPPENED IDK');

});

// console.log(promise1);

// promise1.then(value => {
    // console.log(value)
// }) // catch resolve 
// 
// promise1.catch(err => {
    // console.log(err)
// }) // catch reject



// promise1
    // .then(value => {
        // console.log(value)
    // }).catch(err => {
        // console.log(err)
    // }) // combined


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
    console.log(promise2)
    return promise2;
}

addBook({name: "book 4", author: "author 4"})
    .then(() => {
        console.log("New list")
        listBooks();
    }).catch((err) => {
        console.log("Hata! " + err);
    })