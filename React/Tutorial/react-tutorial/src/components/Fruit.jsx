export default function Fruit({ fruit, ...props }) {
  return (
    <>
      {/* <li>
        {fruit.emoji} {fruit.name} ${fruit.price}
      </li>
      {fruit.price > 8 ? (
        <li>
          {fruit.emoji} {fruit.name} ${fruit.price}
        </li>
      ) : (
        <li></li>
      )} */}
      <li>
        {fruit.emoji} {fruit.name} ${fruit.price} {fruit.soldout ? "Sold Out" : ""}
      </li>
    </>
  );
}
