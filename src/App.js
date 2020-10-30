import React from 'react';
import SearchList from './page/searchList'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props) 
       
    this.state={
      
      
    }
  }

 render(){
   return (
   <Router>
      <Switch>
      <Route exact path="/" component={SearchList} />
      </Switch>
   </Router>)
 }

  
}


export default App;
