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
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress (e) {
    /* Ta emot/läsa av värdet i input fältet.
    Skicka värdet till searchBooks 
    SearchBooks returnerar en filtrerad lista
    Filtrerad lista skickas till funktion som renderBookList*/ 
    
    searchBooks(e.target.value);
}

function searchBooks(searchTerm){
    /* Loopa igenom bookList
    För varje varv i loopen, ta det aktuella elementet
    Jämför titeln med sökterm
    Om söktermen finns någonstans i titeln, lägg till elementet i en ny lista (filterLIst)  
    */ 

    const filteredList = [];
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList [i].title.toLowerCase();
        if(title.indexOf(searchTerm.toLowerCase()) >=  0) {
        filteredList.push(bookList[i]); 
    }
    }
    renderBookList(filteredList);
}


function renderBookList(bookList){
    /*element i HTML-listan visas/döljs beroende på listans innehåll */ 
    let html = `<ul class="book-list rounded-md border-2 border-black bg-white w-full mx-auto">`;
        for(let i = 0; i < bookList.length; i++){
           html += `<li
                        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                        ${bookList[i].author} - ${bookList[i].title}
                    </li>` 
        }


    html +=    `</ul> `;

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement);
    }

    root.insertAdjacentHTML("beforeend", html);


    
}

