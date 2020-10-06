import React, { useEffect } from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';
import { useHistory } from "react-router-dom";
import Button from './Button';
import { GRIDS_1, GRIDS_2, GRIDS_3 } from './App';
import Grid from './Grid';

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    props.setFocus('button-1');
  }, []);

  return (
    <>
      <div className="Home App-content-container">
        <Button focusKey="button-1" />
        { GRIDS_1.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
        <Button 
          focusKey="button-2" 
          text={'Go to About'} 
          handleClick={() => {
            console.log('xxx handle click');
            history.push("/about");
          }}
        />
        <Button focusKey="button-3" disabled text={'Home disabled btn'} />
        { GRIDS_2.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
        <Button focusKey="button-4" text={'About button'} />
        { GRIDS_3.map(grid => (
          <Grid {...grid} forgetLastFocusedChild key={grid.id} />
        ))}
      </div>
    </>
  );
}

export default withFocusable()(Home);
