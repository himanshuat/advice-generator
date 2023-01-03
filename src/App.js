import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import './App.css';

const API_URL = "https://api.adviceslip.com/advice";

function App() {
	const [quote, setQuote] = useState({});
	
	function getAdvice() {
		fetch(API_URL).then(res => res.json())
		.then(data => {
			setQuote(data.slip);
		})
	}
	
	useEffect(() => getAdvice(), []);

	return (
		<Quote id={quote.id} advice={quote.advice} getAdvice={getAdvice} />
	);
}

export default App;
