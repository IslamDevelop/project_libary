import './style.css'

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const addBookButton = document.querySelector(".addBook");
const form = document.querySelector("#addBookForm");
const closeform = document.querySelector(".closeForm");
const main = document.querySelector(".main");

closeform.addEventListener("click", () => {
  form.style.display = "none";
});

addBookButton.addEventListener("click", () => {
  form.style.display = "flex";
});

const ldoor = document.querySelector(".leftDoor");
const rdoor = document.querySelector(".rightDoor");

openButton.addEventListener("click", () => {
  ldoor.classList.add("leftDoor_open");
  rdoor.classList.add("rightDoor_open");
});

closeButton.addEventListener("click", () => {
  ldoor.classList.remove("leftDoor_open");
  rdoor.classList.remove("rightDoor_open");
  form.style.display = "none";
});

const bookCard = document.querySelector(".bookCard");
////родительский блок будущих карточек

function createCard() {
  bookCard.innerHTML = "";

  books.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const titleCard = document.createElement("h3");
    const countCard = document.createElement("h4");
    titleCard.textContent = `Название: \n${element.title}`;
    countCard.textContent = `Страниц: \n${element.count}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    const checker = document.createElement("h5");
    if (element.check === true) {
      checker.textContent = "Прочитано";
      checker.style.backgroundColor = "green";
    } else {
      checker.textContent = "Не прочитано";
    }
    card.append(titleCard, countCard, checker, deleteButton);
    bookCard.appendChild(card);

    checker.addEventListener("click", function () {
      if (element.check === true) {
        element.check = false;
      } else {
        element.check = true;
      }
      createCard();
      console.log(books);
      console.log(element.check);
    });

    deleteButton.addEventListener("click", () => deleteBook(index));
  });
}
// Создание карточек

function deleteBook(index) {
  books.splice(index, 1);
  console.log(books);
  createCard();
}
// удаление карточек

const books = [];

////////конструктор объектов////
function Bookers(title, count, check) {
  this.title = title;
  this.count = count;
  this.check = check;
}
////////конструктор объектов////

const adder = document.querySelector(".adder");
////кнопка добавить' с окна

adder.addEventListener("click", () => {
  const title = document.querySelector("#bookTitle").value;
  const count = document.querySelector("#bookCount").value;
  const check = document.querySelector("#read").checked;
  if (title === "" || count === "") {
    return;
  }
  if (books.length === 9) {
    alert("Шкаф заполнен, освободи место");
  } else {
    ///Значения с инпутов

    const book = new Bookers(title, count, check);
    ///создаем объект используя конструктор

    books.push(book);
    ////добавляем объект в массив

    createCard();

    ///И запускаем функцию для создания карточки этому объекту

    form.style.display = "none";
    document.querySelector("#bookTitle").value = "";
    document.querySelector("#bookCount").value = "";
    //очистка инпутов
    console.log(books);
  }
});
