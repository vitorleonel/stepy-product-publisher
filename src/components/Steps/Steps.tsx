import { useReducer } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import CategoryStep from './CategoryStep';
import BasicInformationStep from './BasicInformationStep';
import ImagesStep from './ImagesStep';
import AdditionalInformationStep from './AdditionalInformationStep';
import PublishedStep from './PublishedStep';

import { reducer, initialState } from '../../store';

const Steps = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Switch>
        <Route path="/categories" component={() => <CategoryStep state={state} dispatch={dispatch} />} />
        <Route path="/basic-information" component={() => <BasicInformationStep  state={state} dispatch={dispatch} />} />
        <Route path="/images" component={() => <ImagesStep state={state} dispatch={dispatch} />} />
        <Route path="/additional-information" component={() => <AdditionalInformationStep state={state} dispatch={dispatch} />} />
        <Route path="/published" component={() => <PublishedStep state={state} dispatch={dispatch} />} />

        <Redirect exact from="/" to="/categories" />
      </Switch>
    </Router>
  );
}

export default Steps;
