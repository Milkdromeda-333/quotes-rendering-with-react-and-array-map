import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

// This project is a webpage that renders a list of fun quotes from adventuretime
// To build, I created a component that would return an array of quotes
// I then made the App component render an element using array.map() for each element
// in the Quote component. It works because in react, it will render each element in
// an array.
