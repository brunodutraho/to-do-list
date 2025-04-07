const INITIAL_STATE = { description: "", list: [] };

// biome-ignore lint: <explanation>
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE':
            return { ...state, description: action.payload }
		case 'TODO_SEARCHED': 
			return {...state, list: action.payload}
		case 'TODO_CLEAR': 
			return {...state, description: ''}
    }
    return state
}