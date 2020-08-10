import React from 'react';
import Header from "./components/Header";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
		<Router basename={window.location.pathname || ''}>
			<Switch>

				<Route path="/" exact>
					<Header/>
					<TinderCards />
					<SwipeButtons />
				</Route>

				<Route path="/chats" exact>
					<Header backButton="/" />
					<Chats />
				</Route>

				
				<Route path="/chats/:person">
					<Header backButton="/chats" />
					<ChatScreen />
				</Route>

			</Switch>
		</Router>
    </div>
  );
}

export default App;
