import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route  path="/posts/:postId" component={PostDetails}></Route>
     </Switch>
   </Router>
  );
}

export default App;
