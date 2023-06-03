import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
    return <h1>This is my first component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);
