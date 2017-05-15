//import {browserHistory} from 'react-router';

export default (state = {count: 0}, action) => {
  	switch (action.type) {
    	case 'INCREMENT': state.count++; break;
    	case 'DECREMENT': state.count--; break;	
  	}

  	return state;
}
