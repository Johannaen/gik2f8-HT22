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

const searchInput = null;

const handleKeyPress = (input) => {
    /* Ta emot/läsa av värdet i input fältet.
    Skicka värdet till searchBooks 
    SearchBooks returnerar en filtrerad lista
    Filtrerad lista skickas till funktion som renderBookList*/ 
    
    searchBooks(input);
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
        filteredList.push(bookList[0]); 
    }
    }
    renderBookList(filteredList);
}


function renderBookList(list){
    /*element i HTML-listan visas/döljs beroende på listans innehåll */ 
    console.log(list);
}

handleKeyPress('e');