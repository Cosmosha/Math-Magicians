import React, { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const key = 'b1PZcSwRaKAwryutCkkH2A==lVNi0KrhEV3io1wO';
        const res = await fetch(url, {
          headers: { 'x-api-key': key },
          contentType: 'application/json',
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setData, setIsLoading]);

  if (hasError) return <div> Something is wrong! </div>;
  if (isLoading) return <div> Loading... </div>;
  return (
    <ul className="getFetched">
      {' '}
      {data.map((item) => (
        <li key={item.id}>
          {' '}
          {item.quote}
          {' '}
          <br />
          {' '}
          {item.author}
          {' '}
        </li>
      ))}
      {' '}
    </ul>
  );
}

export default Quote;
