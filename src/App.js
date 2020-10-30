import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchList from './page/searchList'
import DetailShow from './page/detailShow'


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
      <Route path="/detailShow" component={DetailShow} />
      </Switch>
   </Router>)
 }

  
}


export default App;
