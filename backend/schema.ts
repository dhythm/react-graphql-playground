import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
    getNumber(input: NumberInput!): Number
    getNumbers: [Number]
    getComment(input: CommentInput!): Comment
  }
  input NumberInput {
    id: ID
  }
  type Book {
    title: String
    author: Author
  }
  type Author {
    id: ID
    name: String
  }
  type Number {
    id: ID
    value: Float
  }
  input CommentInput {
    title: String
  }
  type Comment {
    id: ID
    title: String
    comment: String
  }
`;
