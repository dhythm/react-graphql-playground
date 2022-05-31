import {
  getBooks,
  getAuthors,
  getNumber,
  getNumbers,
  commentsList,
} from "./model";

export const resolvers = {
  Query: {
    getBooks: (_parent, _args, _context, _info) => {
      const books = getBooks();
      return books;
    },
    getAuthors: (_parent, _args, _context, _info) => {
      const authors = getAuthors();
      return authors;
    },
    getNumbers: (_parent, _args, _context, _info) => {
      const numbers = getNumbers();
      return numbers;
    },
    getNumber: (_parent, { input }, _context, _info) => {
      const number = getNumber(input);
      return number;
    },
    getComment: (_parent, { input }, _context, _info) => {
      const comment = commentsList.find((p) => p.title === input.title);
      return comment;
    },
  },
};
