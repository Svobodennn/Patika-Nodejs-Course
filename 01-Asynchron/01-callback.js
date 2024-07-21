const func1 = () => {
    console.log("func 1 completed");
    func2()
}
const func2= () => {
    console.log("func 2 completed");
    func3()
}
const func3 = () => {
    console.log("func 3 completed");
}


// func1();

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

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addBook({name: "book 4", author: "author 4"},listBooks)