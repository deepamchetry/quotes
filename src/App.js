import React, {useEffect, useState} from "react";
import { getRandomColor, fetchData } from "./utils";
import Container from "./comonents/container";
import QuoteBox from "./comonents/QuoteBox";
import Button from "./comonents/Button";
import styles from './index.css'

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);

  const populateData = async() => {
    const result = await fetchData();
    const randomColor = getRandomColor();
    setColor(randomColor);
    setQuote(result.content);
    setAuthor(result.author);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container color={color}>
      <QuoteBox>
          <p id="quote">{quote}</p>
          <p id="author">{`- ${author || 'Anonymous'}`}</p>
         <Button onClick={populateData} color={color}
         text='Quote for the day'/>
        </QuoteBox>
        </Container>
  );
}

export default App;
