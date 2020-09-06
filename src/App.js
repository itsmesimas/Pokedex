import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/layout/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from  './pattern.png'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';

class App extends Component{
	render() {
		return (
			<Router>
				<div className="App" style={{background:`url(${backgroundImage})`}}>
					<NavBar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Dashboard} />
							<Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
