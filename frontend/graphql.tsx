import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  title?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type Number = {
  __typename?: 'Number';
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Float']>;
};

export type NumberInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  getAuthors?: Maybe<Array<Maybe<Author>>>;
  getBooks?: Maybe<Array<Maybe<Book>>>;
  getComment?: Maybe<Comment>;
  getNumber?: Maybe<Number>;
  getNumbers?: Maybe<Array<Maybe<Number>>>;
};


export type QueryGetCommentArgs = {
  input: CommentInput;
};


export type QueryGetNumberArgs = {
  input: NumberInput;
};
