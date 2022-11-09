import './css/App.css';
import './css/stamp.css';
import { List } from './components/List';
import { Details } from './components/Details';
import { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const DataContext = createContext({getid:0, setGetid: () => {}});

function App() {
  const url = process.env.REACT_APP_BLANK_URL;
  function DataPovider(props) {
    const [getid, setGetid] = useState(0);
    return(
      <DataContext.Provider value={{ getid, setGetid }}>
        {props.children}
      </DataContext.Provider>
    )
  }
  return (
    <div className="App">
      <DataPovider>
        <List url={url}/>
        <Details url={url}/>
      </DataPovider>
      
    </div>
  );
}
App.propTypes = {
  List: propTypes.func,
  Details: propTypes.func
}
export default App;
