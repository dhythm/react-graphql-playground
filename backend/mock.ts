export class MockStorage {
  getBooks(): any[] {
    return [
      {
        title: "Harry Potter and the Sorcerer's stone",
        authorId: "1",
      },
      {
        title: "Jurassic Park",
        authorId: "2",
      },
    ];
  }

  getAuthors(): any[] {
    return [
      {
        id: "1",
        name: "J.K. Rowling",
      },
      {
        id: "2",
        name: "Michael Crichton",
      },
    ];
  }
}
