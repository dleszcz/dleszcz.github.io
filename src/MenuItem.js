import React, { useEffect } from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';

function MenuItem(props) {
  const {id, focused, setFocus} = props;

  return (
    <div 
      className="MenuItem" 
      style={{
        border: `1px solid ${focused ? 'blue' : '#eee'}`
      }}
      onClick={() => {
        setFocus();
      }}
    >
        {id}
    </div>
  );
}

export default withFocusable()(MenuItem);
