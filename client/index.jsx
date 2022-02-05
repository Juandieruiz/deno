import { App } from "./01-deno/index.jsx";

ReactDOM.hydrate(
  <App pathname={window.location.pathname} />,
  document.getElementById("root"),
);