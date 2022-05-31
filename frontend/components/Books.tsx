import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Book, Query } from "../graphql";

const GetBooks = gql`
  query getBooks {
    getBooks {
      title
      author {
        name
      }
    }
  }
`;

export const Books: FC = () => {
  const { loading, error, data } = useQuery<Query>(GetBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.getBooks.map(({ title, author: { name } }) => (
    <div key={title}>
      <p>
        {title}: {name}
      </p>
    </div>
  ));
};
