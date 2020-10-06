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

const Focusable = (props) => {
  const { children, focused, disabled, Component, onClick } = props;
  const itemRef = useRef();
  console.log('xxx render Focusable')

  useEffect(() => {
    if (focused) {
      const isVisible = isElementInViewport(itemRef.current);
      // const el = itemRef.current.getBoundingClientRect();
      // const direction =  el.top > 0 ? 'start' : 'end';
      if (!isVisible) {
        itemRef.current.scrollIntoView({block: 'center', inline: "nearest"});
      }
    }
  }, [focused]);

  return (
    <Component
      ref={itemRef}
      focused={focused}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

const FocusableComponent = withFocusable()(Focusable);

const FocusableWrapper = (props) => {
  return (
    <FocusableComponent
      {...props}
      focusable={!props.disabled}
      onClick={props.handleClick}
      onEnterPress={props.handleClick}
      // onArrowPress={props.onArrowPress}
      // onBecameFocused={props.onItemFocused}
      // onBecameBlurred={props.onItemBlurred}
      // autoRestoreFocus={false}
      // trackChildren
      // forgetLastFocusedChild
    >
      {props.children}
    </FocusableComponent>
  );
}

export default FocusableWrapper;
