import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import loadingData from './LoadingData';
import propTypes from 'prop-types';

export const Details = ({url}) => {
  const { getid } = useContext(DataContext);
  const [data, setData] = useState({});
  const [ load, setLoad] = useState(true);
  useEffect(() => {
    if (getid === 0) {return;}
    loadingData(url + `${getid}.json`).then((res) => {
      const {id, name, avatar, details} = res;
      const {city, company, position}  = details;
      setData({id, name, avatar, city, company, position});
      setLoad(false);
    }).catch((err) => { console.log(err);});
    return(() => {setData({}); setLoad(true);});
  }, [url, getid]);
  
  if (getid === 0) {return;}
  if(load) {return <div>Минуточку! Загружаю.....</div>}
  return(
    <div id={data.id} className='detal'>
      <img className='detal_img' src={data.avatar} alt='avatar'/>
      <p className='detail_name det'>{data.name}</p>
      <p className='detail_city det'> City: {data.city}</p>
      <p className='detail_company det'>Company: {data.company}</p>
      <p className='detail_pos det'>Position: {data.position}</p>
    </div>
  )
}

Details.propTypes ={
  data: propTypes.object,
  load: propTypes.object,
}
