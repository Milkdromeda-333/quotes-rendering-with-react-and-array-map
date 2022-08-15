import "./styles.css";
import Quotes from "./Quotes";

export default function App() {
	let quotes = Quotes.map((quote) => <p>{quote}</p>);
	return <div>{quotes}</div>;
}
