import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "David",
    age: 38,
    address: {
      city: "São Paulo",
      state: "São Paulo",
      country: "Brasil",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card userName="David" myArr={newArr} />
      <Card userName="Matt" post="Intern" />
    </>
  );
}

export default App;
