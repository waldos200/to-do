// dentro de app vamos a llamar a los contenedores
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TaskContainer from './containers/TaskContainer';
import CreateContainer from './containers/CreateContainer';
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';

// SPA => Single Page App
// PWA => Progresive Web App
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={TaskContainer} />
          <Route exact path="/create-task" component={CreateContainer} />

          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
