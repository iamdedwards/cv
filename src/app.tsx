import * as React from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
// sagaMiddleware.run(helloSaga);

const App = (): JSX.Element => (
    <div className="w-100 h-100 d-flex flex-column overflow-hidden" style={{ position: "absolute"}}>
        <div className="flex-shrink-1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Daniel Edwards</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Motivation</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Formation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="flex-grow-1 overflow-auto">
            <div className="jumbotron pt-4">
                <h1 className="display-4">Fullstack Developpeur</h1>
                <p className="lead">
                    Avec 2 ans d'experience comme Developpeur fullstack je peux assurer yada yada
                </p>
                <hr className="my-4"/>
                <p>beepboop</p>
            
            </div>
        </div>
    </div>

);

export default App;