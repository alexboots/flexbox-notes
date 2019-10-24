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

import { Grid } from './grid/Grid'
import { GridFractionUnitsRepeat } from './grid/GridFractionUnitsRepeat'
import { GridPositioning } from './grid/GridPositioning'
import { GridTemplateAreas } from './grid/GridTemplateAreas'
import { GridAutoFitMinmax } from './grid/GridAutoFitMinmax'
import { GridImageGrid } from './grid/GridImageGrid'
import { GridOtherStuff } from './grid/GridOtherStuff'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul style={{ fontSize: "12px", listStyleType: "none" }}>
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
              <li>
                <Link to="/grid">Grid</Link>
              </li>
              <li>
                <Link to="/grid-fraction-units-repeat">GridFractionUnitsRepeat</Link>
              </li>
              <li>
                <Link to="/grid-positioning">GridPositioning</Link>
              </li>
              <li>
                <Link to="/grid-template-areas">GridTemplateAreas</Link>
              </li>
              <li>
                <Link to="/grid-auto-fit-minmax">GridAutoFitMinmax</Link>
              </li>
              <li>
                <Link to="/grid-image-grid">GridImageGrid</Link>
              </li>
              <li>
                <Link to="/grid-other-stuff">GridOtherStuff</Link>
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
            <Route path="/grid">
              <Grid />
            </Route>
            <Route path="/grid-fraction-units-repeat">
              <GridFractionUnitsRepeat />
            </Route>
            <Route path="/grid-positioning">
              <GridPositioning />
            </Route>
            <Route path="/grid-template-areas">
              <GridTemplateAreas />
            </Route>
            <Route path="/grid-auto-fit-minmax">
              <GridAutoFitMinmax />
            </Route>
            <Route path="/grid-image-grid">
              <GridImageGrid />
            </Route>
            <Route path="/grid-other-stuff">
              <GridOtherStuff />
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
