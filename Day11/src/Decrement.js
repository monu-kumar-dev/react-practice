function Decrement({ counts, setCounts }) {
  return (
    <>
      <button onClick={() => setCounts((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default Decrement;
