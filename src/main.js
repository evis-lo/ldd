import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
store.subscribe(() => {
	console.log(123)
})
store.subscribe(() => {
	console.log(456)
})
render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
	,
	document.querySelector('#app')
)