'use strict';
/* Vad ska vi göra här? */ 
console.log('test');

const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];

/*const searchInput = document.children[0].children[1].children[1].children[1]; */
/*const searchField = document.getElementById('searchField');
console.log(searchField);*/

/* keydown */ 
searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));
// renderBookList( 
//     bookList.filter(
//     ({title, author}) => {
//         const searchTerm = e.target.value.toLowerCase();
//         return title.toLocaleLowerCase().indexOf(searchTerm) >= 0 || author.toLocaleLowerCase().indexOf(searchTerm) >= 0;
//         })     
//     )
// );    

function searchBooks(searchTerm){
     renderBookList( 
         bookList.filter(
         ({title, author}) => 
             title.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || 
             author.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
         )
     );    
 }


function renderBookList(bookList){
    /*element i HTML-listan visas/döljs beroende på listans innehåll */ 
   
    BookList(bookList);

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement);
    }
    if (bookList.length > 0){
        root.insertAdjacentHTML("beforeend", BookList(bookList));    
    }   
}

