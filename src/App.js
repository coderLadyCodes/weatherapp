import React from 'react';
const api= {
  key: "682e64261ac4049f023c126b080b40cf",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="search..."
          />
        </div>
         
      </main>
     </div>
  );
}

export default App;
