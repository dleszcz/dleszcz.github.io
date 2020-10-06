import React, { useEffect } from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';
import Item from './Item';

function Grid({items}) {
  return (
    <div className="Grid">
      { items.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default withFocusable()(Grid);
