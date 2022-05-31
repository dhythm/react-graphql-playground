import { gql, useQuery } from "@apollo/client";
import { FC } from "react";

const GetBooks = gql`
  query books {
    books() {
        title
        author
    }
  }
`;

export const Books: FC = () => {
  const { loading, error, data } = useQuery(GetBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
};
