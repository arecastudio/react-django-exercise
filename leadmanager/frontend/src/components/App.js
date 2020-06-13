import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

class App extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Fragment>
        <Header/>
        <div className="container">
          <Dashboard/>
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
