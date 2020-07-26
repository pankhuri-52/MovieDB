import React from 'react';
import Result from './Result';

const Results = ({results, openPopup}) => {
    return (
        <section className="results">
            {
                results.map(result => (
                    <Result key={result.Title} result={result} openPopup={openPopup} />
                ))
            }
        </section>
    )
}
export default Results;