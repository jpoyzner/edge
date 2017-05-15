//import {browserHistory} from 'react-router';

export default (state = {count: 0, logs: []}, action) => {
  	switch (action.type) {
    	case 'INCREMENT': state.count++; break;
    	case 'DECREMENT': state.count--; break;	
    	case 'GOTLOGS': state.logs = action.data; break
  	}

  	return state;
}
