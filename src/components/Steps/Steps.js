import { useEffect, useReducer, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { reducer, initialState } from '../../store';

import ProgressBar from '../ProgressBar';

import CategoryStep from '../../pages/CategoryStep';
import BasicInformationStep from '../../pages/BasicInformationStep';
import ImagesStep from '../../pages/ImagesStep';
import AdditionalInformationStep from '../../pages/AdditionalInformationStep';
import PublishedStep from '../../pages/PublishedStep';

const Steps = () => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    calculateProgressBarHandle();
  }, [location.pathname]);

  const calculateProgressBarHandle = () => {
    const options = {
      '/categories': 1,
      '/basic-information': 2,
      '/images': 3,
      '/additional-information': 4,
      '/published': 5,
    };

    const selectedOption = options[location.pathname] || options['/categories'];
    const totalOptions = Object.keys(options).length;

    setProgress((selectedOption / totalOptions) * 100);
  };

  return (
    <>
      <ProgressBar progress={progress} />

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
    </>
  );
};

export default Steps;
