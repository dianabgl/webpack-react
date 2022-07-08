import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import './styles/global.scss';

//Recurso para decir hacia donde se va a importar la aplicación
//document.getElementById para mostrar en HTML la aplicación
ReactDOM.render(<App />, document.getElementById('app'));
