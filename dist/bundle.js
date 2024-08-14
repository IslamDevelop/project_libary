/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const openButton = document.querySelector(\".open\");\r\nconst closeButton = document.querySelector(\".close\");\r\nconst addBookButton = document.querySelector(\".addBook\");\r\nconst form = document.querySelector(\"#addBookForm\");\r\nconst closeform = document.querySelector(\".closeForm\");\r\nconst main = document.querySelector(\".main\");\r\n\r\ncloseform.addEventListener(\"click\", () => {\r\n  form.style.display = \"none\";\r\n});\r\n\r\naddBookButton.addEventListener(\"click\", () => {\r\n  form.style.display = \"flex\";\r\n});\r\n\r\nconst ldoor = document.querySelector(\".leftDoor\");\r\nconst rdoor = document.querySelector(\".rightDoor\");\r\n\r\nopenButton.addEventListener(\"click\", () => {\r\n  ldoor.classList.add(\"leftDoor_open\");\r\n  rdoor.classList.add(\"rightDoor_open\");\r\n});\r\n\r\ncloseButton.addEventListener(\"click\", () => {\r\n  ldoor.classList.remove(\"leftDoor_open\");\r\n  rdoor.classList.remove(\"rightDoor_open\");\r\n  form.style.display = \"none\";\r\n});\r\n\r\nconst bookCard = document.querySelector(\".bookCard\");\r\n////родительский блок будущих карточек\r\n\r\nfunction createCard() {\r\n  bookCard.innerHTML = \"\";\r\n\r\n  books.forEach((element, index) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const titleCard = document.createElement(\"h3\");\r\n    const countCard = document.createElement(\"h4\");\r\n    titleCard.textContent = `Название: \\n${element.title}`;\r\n    countCard.textContent = `Страниц: \\n${element.count}`;\r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.textContent = \"Удалить\";\r\n    const checker = document.createElement(\"h5\");\r\n    if (element.check === true) {\r\n      checker.textContent = \"Прочитано\";\r\n      checker.style.backgroundColor = \"green\";\r\n    } else {\r\n      checker.textContent = \"Не прочитано\";\r\n    }\r\n    card.append(titleCard, countCard, checker, deleteButton);\r\n    bookCard.appendChild(card);\r\n\r\n    checker.addEventListener(\"click\", function () {\r\n      if (element.check === true) {\r\n        element.check = false;\r\n      } else {\r\n        element.check = true;\r\n      }\r\n      createCard();\r\n      console.log(books);\r\n      console.log(element.check);\r\n    });\r\n\r\n    deleteButton.addEventListener(\"click\", () => deleteBook(index));\r\n  });\r\n}\r\n// Создание карточек\r\n\r\nfunction deleteBook(index) {\r\n  books.splice(index, 1);\r\n  console.log(books);\r\n  createCard();\r\n}\r\n// удаление карточек\r\n\r\nconst books = [];\r\n\r\n////////конструктор объектов////\r\nfunction Bookers(title, count, check) {\r\n  this.title = title;\r\n  this.count = count;\r\n  this.check = check;\r\n}\r\n////////конструктор объектов////\r\n\r\nconst adder = document.querySelector(\".adder\");\r\n////кнопка добавить' с окна\r\n\r\nadder.addEventListener(\"click\", () => {\r\n  const title = document.querySelector(\"#bookTitle\").value;\r\n  const count = document.querySelector(\"#bookCount\").value;\r\n  const check = document.querySelector(\"#read\").checked;\r\n  if (title === \"\" || count === \"\") {\r\n    return;\r\n  }\r\n  if (books.length === 9) {\r\n    alert(\"Шкаф заполнен, освободи место\");\r\n  } else {\r\n    ///Значения с инпутов\r\n\r\n    const book = new Bookers(title, count, check);\r\n    ///создаем объект используя конструктор\r\n\r\n    books.push(book);\r\n    ////добавляем объект в массив\r\n\r\n    createCard();\r\n\r\n    ///И запускаем функцию для создания карточки этому объекту\r\n\r\n    form.style.display = \"none\";\r\n    document.querySelector(\"#bookTitle\").value = \"\";\r\n    document.querySelector(\"#bookCount\").value = \"\";\r\n    //очистка инпутов\r\n    console.log(books);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://libary/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;