import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

//  See CustomReact
// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Click me to visit Google
  </a>
);

//ReactDOM.createRoot(document.getElementById("root")).render(AnotherElement);

const reactElement = React.createElement(
  "a",
  {
    href: "http://google.com",
    target: "_blank",
  },
  "Click me to visit Google"
);

//ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
