export default function Message() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Click Here To Get A Message</button>
      </div>
    </>
  );
}
