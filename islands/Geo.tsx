import { useState } from "preact/hooks";

export default function Geo() {
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState(0);
	const num = parseInt(value) + parseInt(value2);


	return (
		<>
			<div>Counter: {num}</div>
			<input type="number" onInput={(e) => setValue(e.target.value)}/>
	    <input type="number" onInput={(e) => setValue2(e.target.value)}/>
		</>
	);
}