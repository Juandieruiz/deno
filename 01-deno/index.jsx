import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

export default function App () {
    return <h1>Hola Mundo!</h1>
}

console.log(renderToString(<App />))