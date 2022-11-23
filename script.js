'use strict';
/* Vad ska vi göra här? */ 
console.log('test');

let bookList = [];

window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
});

/*const searchInput = document.children[0].children[1].children[1].children[1]; */
/*const searchField = document.getElementById('searchField');
console.log(searchField);*/

 
searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));
// renderBookList( 
//     bookList.filter(
//     ({title, author}) => {
//         const searchTerm = e.target.value.toLowerCase();
//         return title.toLocaleLowerCase().indexOf(searchTerm) >= 0 || author.toLocaleLowerCase().indexOf(searchTerm) >= 0;
//         })     
//     )
// );    

async function searchBooks(searchTerm){
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

    existingElement && root.removeChild(existingElement);
    
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML("beforeend", BookList(bookList));    
      
}

