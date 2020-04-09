import React, { useState, createContext, Children } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
	// Initially data called from API
	const [ books, setBooks ] = useState({});
	// Saved book data
	const [ savedBooks, setSavedBooks ] = useState('');
	// State check to see if it's done being called
	const [ fetch, setFetch ] = useState(false);
	// Set search data
	const [ search, setSearch ] = useState('');
	// Set Modal state and message
	const [ modalState, setModalState ] = useState('hide');
	const [ modalCopyState, setModalCopyState ] = useState('');

	return (
		<AppContext.Provider
			value={{
				bookData: [ books, setBooks ],
				savedBooksData: [ savedBooks, setSavedBooks ],
				fetchData: [ fetch, setFetch ],
				searchData: [ search, setSearch ],
				modalData: [ modalState, setModalState ],
				modalCopyData: [ modalCopyState, setModalCopyState ]
			}}
		>
			{props.Children}
		</AppContext.Provider>
	);
};
