import { useReducer } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { reducer, initialState } from '../../store';

import CategoryStep from './CategoryStep';
import BasicInformationStep from './BasicInformationStep';
import ImagesStep from './ImagesStep';
import AdditionalInformationStep from './AdditionalInformationStep';
import PublishedStep from './PublishedStep';

const Steps = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Switch>
        <Route path="/categories">
          <CategoryStep state={state} dispatch={dispatch} />
        </Route>

        <Route path="/basic-information">
          <BasicInformationStep state={state} dispatch={dispatch} />
        </Route>

        <Route path="/images">
          <ImagesStep state={state} dispatch={dispatch} />
        </Route>

        <Route path="/additional-information">
          <AdditionalInformationStep state={state} dispatch={dispatch} />
        </Route>

        <Route path="/published">
          <PublishedStep state={state} dispatch={dispatch} />
        </Route>

        <Redirect exact from="/" to="/categories" />
      </Switch>
    </Router>
  );
};

export default Steps;
