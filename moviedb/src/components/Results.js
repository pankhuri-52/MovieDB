import React from 'react';
import Result from './Result';

const Results = ({results}) => {
    return (
        <section className="results">
            {
                results.map(result => (
                    <Result result={result} key={result.imdbID} />
                ))
            }
        </section>
    )
}
export default Results;