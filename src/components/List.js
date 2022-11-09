import React, { useContext, useEffect, useState } from 'react';
import { ListItem } from './ListItem';
import { DataContext } from '../App';
import loadingData from './LoadingData';
import propTypes from 'prop-types';

export const List = ({url}) => {
  const [list, setList] = useState([]);
  const [ load, setLoad] = useState(true);
  const { setGetid } = useContext(DataContext);
  useEffect(() =>{
    loadingData(url + 'users.json').then((res) => {
      setLoad(false);
      setList(res);
    }).catch((err) => { console.log(err);});
  }, [url]);

  function forCard(id) {
    setGetid(id);
  }
  
  return (
    <ul className='list'>
      {load === false?
        <ListItem data={list} onHendelClick={(id) => {forCard(id)}}/>:
        <div>Минуточку! Загружаю.....</div>
      }
    </ul>
  )
}

List.propTypes = {
  ListItem: propTypes.object,
  list: propTypes.object,
  load: propTypes.object
}
