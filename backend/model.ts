import { MockStorage } from "./mock";

export const getBooks = () => {
  const mockStorage = new MockStorage();
  const books = mockStorage.getBooks();
  const authors = mockStorage.getAuthors();
  return books.map((b) => ({
    title: b.title,
    author: authors.find((a) => a.id === b.authorId),
  }));
};

export const getAuthors = () => {
  const mockStorage = new MockStorage();
  return mockStorage.getAuthors();
};

export const commentsList = [
  {
    id: 1,
    title: "title 1",
    comment: "comment 1",
  },
  {
    id: 2,
    title: "title 2",
    comment: "comment 2",
  },
];

export const getNumbers = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
  }));
};

export const getNumber = (input) => {
  const numbers = getNumbers();
  return numbers.find((v) => String(v.id) === input.id);
};
