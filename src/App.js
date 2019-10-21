import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FlexRow } from './flex/FlexRow'
import { FlexColumn } from './flex/FlexColumn'
import { FlexWrap } from './flex/FlexWrap'
import { FlexGrowShrinkBasis } from './flex/FlexGrowShrinkBasis'
import { FlexOrder } from './flex/FlexOrder'
import { FlexNavExample } from './flex/FlexNavExample'
import { FlexImgGrid } from './flex/FlexImgGrid'


import './App.css';

function App() {
  return (
    <div className="grid">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/flex-row">FlexRow</Link>
              </li>
              <li>
                <Link to="/flex-column">FlexColumn</Link>
              </li>
              <li>
                <Link to="/flex-wrap">FlexWrap</Link>
              </li>
              <li>
                <Link to="/flex-grow-shrink-basis">FlexGrowShrinkBasis</Link>
              </li>
              <li>
                <Link to="/flex-order">FlexOrder</Link>
              </li>
              <li>
                <Link to="/flex-nav-example">FlexNavExample</Link>
              </li>
              <li>
                <Link to="/flex-img-grid">FlexImgGrid</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/flex-row">
              <FlexRow />
            </Route>
            <Route path="/flex-column">
              <FlexColumn />
            </Route>
            <Route path="/flex-wrap">
              <FlexWrap />
            </Route>
            <Route path="/flex-grow-shrink-basis">
              <FlexGrowShrinkBasis />
            </Route>
            <Route path="/flex-order">
              <FlexOrder />
            </Route>
            <Route path="/flex-nav-example">
              <FlexNavExample />
            </Route>
            <Route path="/flex-img-grid">
              <FlexImgGrid />
            </Route>
            <Route path="/">
              asdf
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
