import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
      <main>
        {/*  Search component for searching the movies */}
        <Search />
        {/* Results component for the results of the movies shown */}
        {/* Popup component for the details of every movie */}
      </main>
    </div>
  );
}

export default App;
