import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionarioEdit from './containers/questionario-edit'
import QuestionarioData from './containers/questionario-data';
import rootReducer from './reducers';
import App from './App';
// import { fetchGithubData } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router>
                <Route exact path="/" component={QuestionarioData} />
                <Route path="/edit" component={QuestionarioEdit} />
            </Router>
        </App>
    </Provider>, document.getElementById('root'));
// serviceWorker.unregister();
