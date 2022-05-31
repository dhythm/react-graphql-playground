import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Query } from "../generated/graphql";

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
  if (!data?.getBooks) return null;

  return data.getBooks.map((item) => (
    <div key={item?.title}>
      <p>
        {item?.author?.name}: {item?.title}
      </p>
    </div>
  ));
};
