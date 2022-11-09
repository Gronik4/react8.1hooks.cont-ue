import React from 'react';
import propTypes from 'prop-types';

export const ListItem = (props) => {
  const { data, onHendelClick } = props;
  function hendelClick(evt) {
    const item = evt.target.closest('.list_item');
    onHendelClick(item.id);
  }
  return (
    data.map((el) => {
      return(
        <li className='list_item' key={el.id} id={el.id} onClick={hendelClick}>
          {el.name}
        </li>
      )  
    })
  )
}

ListItem.propTypes = {
  data: propTypes.array,
  hendelClick: propTypes.func
}
