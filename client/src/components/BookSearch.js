import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';

const BookSearch = () => {
	const { searchData, fetchData, bookData } = useContext(AppContext);
	let [ books, setBooks ] = bookData;
	let [ fetch, setFetch ] = fetchData;
	let [ search, setSearch ] = searchData;

	const handleChange = (e) => {
		setSearch((search = e.target.value));
    };
    
    const API = {
        async booksCall(e) {
            if((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                e.target.querySelector("input").blur();
            }

            if(search === ""){

            }
            else {
                const res = await fetch ("api/books", {
                    method: "POST",
                    body: JSON.stringify({searching}),
                    headers: {"Content-Type": "application/json"}
                });

                const json = await res.json();
                setBooks(books = json);
                if(fetch === false) {
                    setFetch(fetch = true)
                }
            }
        }
    }

    let handleKeyPress = (e) => {
        if(e.key === "Enter") {
            API.booksCall();
        }
    }

    return(
    <React.Fragment>
        <header>
            <h1>GOOGLE BOOK SEARCH </h1>
        </header> 

        <section className="filterBar">
            <form onSubmit={(e) => API.booksCall(e)}>
                <input type="text"
                placeholder="Filter by book name"
                value = {search}
                name="book-search"
                onChange={handleChange}
                onKeyPress={(e) => handleKeyPress(e)} />
                <button>Search</button>
            </form>
        </section>
    </React.Fragment>)
};

export default BookSearch;
