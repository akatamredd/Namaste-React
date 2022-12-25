/* Creating react elements and rendering in root */ 
const heading1 = React.createElement("h1", {id:"title"}, "welcome to Namaste Javascript");
const heading2 = React.createElement("h2", {id : "sub title"}, "first class : inception");
const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);