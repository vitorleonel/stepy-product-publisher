import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import StepHeader from '../../components/StepHeader';
import StepNavigation from '../../components/StepNavigation';
import TextAreaField from '../../components/TextAreaField';

import Actions from '../../store/actions';

const AdditionalInformationStep = ({ state, dispatch }) => {
  const history = useHistory();

  const [additionalInformation, setAdditionalInformation] = useState(
    state.additionalInformation
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      dispatch({
        type: Actions.SET_DATA,
        payload: { additionalInformation },
      });
      history.push('/published');
    }, 1000);
  };

  return (
    <section className="steps-item">
      <StepHeader
        title="Additional information"
        description="If the product needs it, you can enter extra information below."
      />

      <TextAreaField
        rows={5}
        name="description"
        label="Description (Optional)"
        placeholder="Your product's extra information"
        id="description-input"
        value={additionalInformation}
        onChange={(event) => setAdditionalInformation(event.target.value)}
      />

      <StepNavigation
        nextText="Publish product"
        nextIcon="checkmark-outline"
        nextDisabled={loading}
        prevHandler={history.goBack}
        nextHandler={handleSubmit}
      />
    </section>
  );
};

export default AdditionalInformationStep;
