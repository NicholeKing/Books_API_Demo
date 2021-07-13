import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = props => {
    const [author, setAuthor] = useState(null);
    const [randNum, setRandNum] = useState(7);
    useEffect(() => {
        axios.get(`https://reststop.randomhouse.com/resources/authors/${randNum}/`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [randNum])
    const getNewNumber = () => {
        setRandNum(Math.floor(Math.random() * (10889 - 7) + 7));
    }
    return(
        <>
            <button onClick={getNewNumber}>Get me a random author!</button>
            {
                author ? <>
                <h2>{author.authorfirst} {author.authorlast}</h2>
                <p dangerouslySetInnerHTML={ {__html: author.spotlight} }></p>
                {
                    author.works ?
                    <h5>Number of books: {author.works.works.length}</h5> : <h5>Somehow, this is an author with no books</h5>
                }
                </> : ""
            }
        </>
    );
}

export default ApiCall;