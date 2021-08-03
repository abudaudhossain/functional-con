// 1. variable 
var favariteBook = "4 houts work";

// 2. array 

var bookList = ["Bangla", "English", "Math", "Physics"];

var mathIndex = bookList.indexOf("Math");
bookList[bookList.indexOf("Bangla")] = "Banglish";

bookList.push("Chamestry");
bookList.pop();

//conditionals

if(bookList[1] == "English") {
    console.log("I am English");
}
else{
    console.log("I am not English");
}

// looping 

var i = 0;
while (i < bookList.length) {
    var book = bookList[i];
    console.log(book);
    i++;
}

console.log("This is For looping");
for(var i = 0; i < bookList.length; i++){
    var book = bookList[i];
    console.log(book);
}