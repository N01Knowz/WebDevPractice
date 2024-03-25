import Fruit from "./Fruit";

function Fruits() {
  // const fruits = [
  //   "Apple",
  //   "Mango",
  //   "Peach",
  //   "Banana",
  //   "Cherry",
  //   "Orange",
  //   "Pineapple",
  // ];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "Banana",
      price: 5,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Mango",
      price: 13,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Peach",
      price: 8,
      emoji: "🍑",
      soldout: false,
    },
  ];
  return (
    <>
      <div>
        <ul>
          {fruits.map((fruit) => (
            // <li key={fruit.name}>
            //   {fruit.emoji} {fruit.name} ${fruit.price}
            // </li>
            <Fruit key={fruit.name} fruit={fruit} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Fruits;
