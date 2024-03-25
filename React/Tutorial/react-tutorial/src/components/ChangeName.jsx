export default function ChangeName({ setTransferName }) {
  function changeName(event) {
    setTransferName(event.target.value);
  }
  return (
    <>
      <div>
        {/* <input type="text" name="incrementByInput" onChange={changeName} />
        <input type="text" name="incrementByInput" onChange={function setName(e) {
          return changeName(e);
        }} /> */}
        <input
          type="text"
          name="incrementByInput"
          onChange={(e) => setTransferName(e.target.value)}
        />
      </div>
    </>
  );
}
