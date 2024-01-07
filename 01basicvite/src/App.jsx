import Youtube from "./youtube";

function App() {
  const username = "david";
  const logic = username === "david" ? "yes" : "no";
  return (
    // <> </> You must return only one tag, this trick is to prevent any hmtl behavior
    <>
      <h1>Vite react app {2 + 2}</h1>
      <h1>Vite react app {logic}</h1>
      <Youtube />
    </>
  );
}

export default App;
