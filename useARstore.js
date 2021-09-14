import React, { useState } from 'react';

function useARstore(intialState = []) {
	const [ state, setState ] = useState(intialState);

	const handleAddStore = (data) => {
		setState([ ...state, { id: state.length + 1, name: data.name, age: data.age } ]);
	};
	const handleRemoveStore = (data) => {
		setState(state.filter((d) => d.id !== data.id));
		console.log(data);
	};

	return [ state, handleAddStore, handleRemoveStore ];
}

export default useARstore;
