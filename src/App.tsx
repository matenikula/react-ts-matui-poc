
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './routes/Form/Form';
import AppList from './routes/AppList/AppList';
import UIElements from './routes/UIElements/UIElements';

const App: React.FC = () => {
    return (
        <div className="App">
           <Navbar/>
           <Switch>
               <Route path="/form" component={Form}/>
               <Route path="/list" component={AppList}/>
               <Route path="/ui" component={UIElements}/>
           </Switch>
        </div>
    );
};

export default App;
