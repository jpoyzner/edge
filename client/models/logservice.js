import request from 'superagent';

export default store => next => action => {
  	next(action);
	switch (action.type) {
	  	case 'GETLOGS':
	  		request.get('/logs/' + action.query).end((err, res) => {
		        if (err) {
		          	console.log(err);
		          	return;
		        }

		        next({type: 'GOTLOGS', data: JSON.parse(res.text)});
		    });
	    	break
	}
};