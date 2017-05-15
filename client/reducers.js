export default (state = {count: 0, page: 'A'}, action) => {
  	switch (action.type) {
  		case 'GOTOA': state.page = 'A'; break;
  		case 'GOTOB': state.page = 'B'; break;
    	case 'INCREMENT': state.count++; break;
    	case 'DECREMENT': state.count--; break;	
  	}

  	return state;
}
