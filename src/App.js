import React, { useEffect } from 'react';
import {initNavigation, withFocusable} from '@noriginmedia/react-spatial-navigation';
import './App.css';
import Grid from './Grid';
import Menu from './Menu';
import Button from './Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './Home';
import About from './About';

export const ITEMS_1 = [
  {
    id: 'item-1-1'
  },
  {
    id: 'item-1-2'
  },
  {
    id: 'item-1-3'
  },
  {
    id: 'item-1-4'
  },
  {
    id: 'item-1-5'
  }
]
export const ITEMS_2 = [
  {
    id: 'item-2-1'
  },
  {
    id: 'item-2-2'
  },
  {
    id: 'item-2-3'
  },
  {
    id: 'item-2-4'
  },
  {
    id: 'item-2-5'
  }
]
export const ITEMS_3 = [
  {
    id: 'item-3-1'
  }
]
export const ITEMS_4 = [
  {
    id: 'item-4-1'
  },
  {
    id: 'item-4-2'
  },
  {
    id: 'item-4-3'
  },
  {
    id: 'item-4-4'
  },
  {
    id: 'item-4-5'
  }
]
export const ITEMS_5 = [
  {
    id: 'item-5-1'
  },
  {
    id: 'item-5-2'
  },
  {
    id: 'item-5-3'
  },
  {
    id: 'item-5-4'
  },
  {
    id: 'item-5-5'
  },
  {
    id: 'item-5-6'
  },
  {
    id: 'item-5-7'
  },
  {
    id: 'item-5-8'
  },
  {
    id: 'item-5-9'
  }
]
export const ITEMS_6 = [
  {
    id: 'item-6-1'
  },
  {
    id: 'item-6-2'
  },
  {
    id: 'item-6-3'
  },
  {
    id: 'item-6-4'
  },
  {
    id: 'item-6-5'
  }
]

export const ITEMS_7 = [
  {
    id: 'item-7-1'
  },
  {
    id: 'item-7-2'
  },
  {
    id: 'item-7-3'
  },
  {
    id: 'item-7-4'
  },
  {
    id: 'item-7-5'
  }
]

export const ITEMS_8 = [
  {
    id: 'item-8-1'
  },
  {
    id: 'item-8-2'
  },
  {
    id: 'item-8-3'
  },
  {
    id: 'item-8-4'
  },
  {
    id: 'item-8-5'
  }
]

export const GRIDS_1 = [
  {
    id: 'grid-1',
    items: ITEMS_1
  },
  {
    id: 'grid-2',
    items: ITEMS_2
  },
  {
    id: 'grid-3',
    items: ITEMS_3
  }
]

export const GRIDS_2 = [
  {
    id: 'grid-4',
    items: ITEMS_4
  },
  {
    id: 'grid-5',
    items: ITEMS_5
  },
  {
    id: 'grid-6',
    items: ITEMS_6
  }
]

export const GRIDS_3 = [
  {
    id: 'grid-7',
    items: ITEMS_7
  },
  {
    id: 'grid-8',
    items: ITEMS_8
  }
]

const PAGES = {
  HOME: '/',
  ABOUT: '/about'
}

const INITIAL_FOCUS_MAP = {
  [PAGES.HOME]: 'button-2',
  [PAGES.ABOUT]: 'button-about-back'
}

function App(props) {
  const { setFocus: handleFocus } = props;

  useEffect(() => {
    initNavigation({});
    const initialFocus = INITIAL_FOCUS_MAP[window.location.pathname];
    handleFocus(initialFocus);
  }, [handleFocus]);

  return (
    <div>hello</div>
  )

  return (
    <Router>
      <div className="App">
        <div className="App-menu-container">
          <Menu />
        </div>
        <Switch>
          <Route path={PAGES.HOME} exact>
            <Home />
          </Route>
          <Route path={PAGES.ABOUT} exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withFocusable()(App);
