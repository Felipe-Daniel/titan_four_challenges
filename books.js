const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, Pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligencia Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficaez",
        author: "Stephen R. Corvey",
      },
    ],
  },
];
// 1
function countCategoriesAndBooks() {
  const categoryCount = booksByCategory.length;

  console.log(`Número de categorias: ${categoryCount}`);

  booksByCategory.forEach((category) => {
    const bookCount = category.books.length;
    console.log(
      `Categoria: ${category.category} - Número de livros: ${bookCount}`
    );
  });
}
// 2
function countAuthors() {
  const authors = [];

  booksByCategory.forEach((category) => {
    category.books.forEach((book) => {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    });
  });

  const authorCount = authors.length;
  console.log(`Número de autores: ${authorCount}`);
}
// 3
function showBooksByAuthor(authorName) {
  const books = [];

  booksByCategory.forEach((category) => {
    category.books.forEach((book) => {
      if (book.author === authorName) {
        books.push(book.title);
      }
    });
  });

  console.log(`Livros do autor ${authorName}:`);
  books.forEach((book) => {
    console.log(book);
  });
}
// 4
function getBooksByAuthor(authorName) {
  const books = [];

  booksByCategory.forEach((category) => {
    category.books.forEach((book) => {
      if (book.author === authorName) {
        books.push(book.title);
      }
    });
  });

  return books;
}

const authorName = "Augusto Cury";
const booksByAuthor = getBooksByAuthor(authorName);

console.log(`Livros do autor ${authorName}:`);
booksByAuthor.forEach((book) => {
  console.log(book);
});
