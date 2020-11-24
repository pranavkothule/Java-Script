console.log('with es6!');


//constructor
class Book {
    constructor(name, author, type)
    {
        this.name = name;
        this.author = author;
        this.type = type;
    }
    
}


//Display constructor
class Display {
    
    //implement add function
    add(book)
    {
        console.log('adding too...');
        let tableBody = document.getElementById('tableBody');
        let uiString = `            
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>    
    `;
        tableBody.innerHTML += uiString;
    }

    //implement clear function
    clear()
    {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    //implement validate function
    validate(book)
    {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }

    //implement show function
    show(type, showmsg)
    {
        let promts = document.getElementById('message');
        let boldText;
        if (type==='success') {
            boldText='Sucess!';
        } else {
            boldText = 'Error!';

        }
        promts.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${boldText}</strong> ${showmsg}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

        setTimeout(() => {
            promts.innerHTML = '';
        }, 5000);
    }

}

//add submit event listner to library form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    console.log('submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let fiction = document.getElementById('fiction');
    let harry_potter = document.getElementById('harry_potter');
    let horror = document.getElementById('horror');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (harry_potter.checked) {
        type = harry_potter.value;
    }
    else if (horror.checked) {
        type = horror.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Successfully added!');
    }
    else {
        display.show('danger', ' Please update name or author!');
    }
    e.preventDefault();
}



//store all data in local storage
//delete data 
//add scrollbar to the view
