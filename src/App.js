import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageAlmuerzoCena from './Pages/PageAlmuerzoCena';
import Pagedesayuno from './Pages/PageDesayuno';
function App(){

        return (

            <BrowserRouter>
            <Switch>
            <Route exact path= '/menudesayunos' component = {Pagedesayuno}/>
            <Route exact path= '/menurestodeldia' component = {PageAlmuerzoCena}/>

            </Switch>
            
          </BrowserRouter>
           
        )
    }


export default App;