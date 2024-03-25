const name = "Test";
function displayMessage(var1) {
  return var1;
}
// function Test({ first_name, last_name, ...props }) {
  function Test(props) {
  //const { first_name, last_name } = props; //Must be the same name when it was sent first_name from the sender = first_name here. Can't name as my_name
  return (
    <>
      <h1>
        {/* Hello {displayMessage(first_name) + " " + last_name + props.emoji} */}
        Hello {displayMessage(props.first_name) + " " + props.last_name + props.emoji}
      </h1>
    </>
  );
}

export default Test;
