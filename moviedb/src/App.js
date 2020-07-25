import React,{useState} from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';

function App() {

  const [state, setState]= useState ({
    s : "", //pull in the search query in the s
    results : [],
    selected : {} //movie we clicked
  });

  const apiurl="http://www.omdbapi.com/?i=tt3896198&apikey=cda02f3b";

  const search = (e) => {
    if(e.key === 'Enter') {
      axios(apiurl + "&s=" + state.s).then(({data}) => {
         let results = data.Search;

         setState(prevState => {
            return {...prevState, results : results}
         });
      });
    }
  }

  const handleInput = (e) =>  {
    let s=e.target.value;

    setState(prevState => {
        return { ...prevState,s: s}
    });
  }

  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
      <main>
        {/*  Search component for searching the movies */}
        <Search handleInput={handleInput} search={search} />
        {/* Results component for the results of the movies shown */}
        <Results results={state.results} />
        {/* Popup component for the details of every movie */}
      </main>
    </div>
  );
}

export default App;
