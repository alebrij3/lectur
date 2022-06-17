export default function BookRow({ qty }) {
  const dimentions = [
    [8, 23],
    [5, 25],
    [8, 20],
    [8, 26],
    [8, 23],
    [8, 20],
    [4, 23],
    [8, 26],
    [8, 23],
    [5, 25],
    [10, 23],
    [8, 26],
    [5, 18],
    [9, 21],
    [8, 26],
    [5, 26],
    [9, 20],
    [8, 26],
    [8, 23],
    [8, 21],
    [4, 23],
    [8, 26],
    [8, 23],
    [5, 25],
    [8, 20],
    [8, 26],
  ];

  const books = [];

  for (let i = 0, j = 0; i < qty; i++) {
    if (j === dimentions.length) {
      j = 0;
    }
    books.push(dimentions[j]);
    j++;
  }

  console.log({ books });

  return (
    <div>
      {books.map((bookDimentions, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: 'inline-block',
              width: `${bookDimentions[0]}px`,
              height: `${bookDimentions[1]}px`,
              backgroundColor: '#eaeaea',
              border: '1px solid black',
            }}
          ></div>
        );
      })}
    </div>
  );
}
