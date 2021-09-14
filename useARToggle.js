import React, { useState } from 'react';

function useARToggle(active = false) {
	const [ state, setState ] = useState(active);
	return [ state, setState ];
}

export default useARToggle;
