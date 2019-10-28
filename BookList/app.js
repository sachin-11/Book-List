// book constructor

  function Book(title, author, isbn){
      this.title  = title;
      this.author = author;
      this.isbn = isbn;
  }




//ui constructor

function UI() {}
//add book to list
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');

//create element
  const row = document.createElement('tr');
   //insert cols
   row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete"><a>X</td>
   
   `

list.appendChild(row);

}


//show alert

UI.prototype.showAlert = function(mesaage, className){
  //create div

  const div = document.createElement('div');

  //add a class
  div.className = `alert ${className}`;

  //add a text

div.appendChild(document.createTextNode(mesaage));

  //get parent
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');
 // insert alert
  container.insertBefore(div, form);


  //time out after 3 sec

  setTimeout(function(){
      document.querySelector('.alert').remove();
  }, 3000);

}


//delete book

UI.prototype.deleteBook = function(target){
    if(target.className = 'delete'){
        target.parentElement.parentElement.remove();
    }
}


//clear fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



//event listener

document.getElementById('book-form').addEventListener('submit', function(e){
// get form values
    const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value


//instantiate book
const book = new Book(title, author, isbn);

//instantiate Ui

const ui = new UI();

//validate

if(title === '' || author === '' || isbn === ''){
 
    //error alert

    ui.showAlert('Please fill all field', 'error');

} else {
  //add book to list

ui.addBookToList(book);

//show success

ui.showAlert('Book added', 'success');

//clear fields

ui.clearFields();

}



e.preventDefault();

});


//event listener for delete


document.getElementById('book-list').addEventListener('click' , function(e){
  
    const ui = new UI();


    ui.deleteBook(e.target);


    //show alert

    ui.showAlert('Book Remove', 'success');


    e.preventDefault();
})