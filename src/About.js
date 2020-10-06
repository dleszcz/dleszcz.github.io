import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';
import Button from './Button';
import { GRIDS_1, GRIDS_2, GRIDS_3 } from './App';
import Grid from './Grid';

function About(props) {
  const history = useHistory();

  useEffect(() => {
    props.setFocus('button-about-back');
  }, []);

  return (
    <>
      <div className="About App-content-container">
        <Button 
          focusKey="button-about-back" 
          text={'Back'} 
          handleClick={() => {
            history.push("/");
          }} 
          onEnterPress={() => {
            history.push("/");
          }} 
        />
        <Button focusKey="button-about-1" text={'Home button 1'} />
        { GRIDS_3.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
        <Button 
          focusKey="button-about-2" 
          text={'Go to Home'} 
          handleClick={() => {
            history.push("/");
          }} 
          onEnterPress={() => {
            history.push("/");
          }} 
        />
        <Button focusKey="button-about-3" disabled text={'Home disabled btn'} />
        { GRIDS_2.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
        <Button focusKey="button-about-4" text={'Home button'} />
        { GRIDS_1.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
      </div>
    </>
  );
}

export default withFocusable()(About);
