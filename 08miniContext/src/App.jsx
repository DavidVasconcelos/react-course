import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    // The components in the middle can access the data inside the provider
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
