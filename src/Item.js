import React, { useEffect, useRef } from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

function Item({id, focused, setFocus}) {
  const itemRef = useRef();
  
  useEffect(() => {
    if (focused) {
      const isVisible = isElementInViewport(itemRef.current);
      // const el = itemRef.current.getBoundingClientRect();
      // const direction =  el.top > 0 ? 'start' : 'end';

      if (!isVisible) {
        itemRef.current.scrollIntoView({behavior: "smooth", block: 'center', inline: "nearest"});
      }
    }
  }, [focused]);

  console.log('xxx render Item', id);

  return (
    <div 
      className="Item"
      style={{
        border: `1px solid ${focused ? 'blue' : '#eee'}`
      }}
      onClick={() => {
        setFocus();
      }}
      ref={itemRef}
    >
        {id}
    </div>
  );
}

export default withFocusable()(Item);
