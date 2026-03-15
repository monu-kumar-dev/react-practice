
function Increment({ counts, setCounts }) {
  return (
    <>
      <h2>Child Counter is {counts}</h2>
      <button onClick={() => setCounts((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default Increment;
