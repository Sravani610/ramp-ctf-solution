import React, { useState, useEffect } from 'react';

export default function App() {
  const [flag] = useState<string>("patient");
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedChars, setDisplayedChars] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Simulate loading the flag
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Typewriter effect - shows one character every 0.5 seconds
  useEffect(() => {
    if (!loading && flag && currentIndex < flag.length) {
      const timer = setTimeout(() => {
        setDisplayedChars((prev: string[]) => [...prev, flag[currentIndex]]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 500); // Half second delay

      return () => clearTimeout(timer);
    }
  }, [flag, currentIndex, loading]);

  // Show "Loading..." while we pretend to load
  if (loading) {
    return <div style={{padding: '20px', fontSize: '20px'}}>Loading...</div>;
  }

  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h1> Ramp CTF Challenge Solution</h1>
      <h2>Flag (with typewriter effect):</h2>
      
      {/* Show each character as a list item */}
      <ul style={{fontSize: '24px', listStyle: 'none', padding: 0}}>
        {displayedChars.map((char: string, index: number) => (
          <li key={index} style={{
            display: 'inline-block',
            margin: '5px',
            padding: '10px',
            border: '2px solid #007bff',
            borderRadius: '5px',
            backgroundColor: '#f8f9fa'
          }}>
            {char}
          </li>
        ))}
      </ul>
      
      <div style={{marginTop: '30px', color: '#666'}}>
        <p>Complete flag: <strong>{flag}</strong></p>
        <p>Characters shown: {displayedChars.length} / {flag.length}</p>
      </div>
    </div>
  );
}
