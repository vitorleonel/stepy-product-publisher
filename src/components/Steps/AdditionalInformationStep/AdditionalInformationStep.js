import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import StepHeader from '../../StepHeader';
import StepNavigation from '../../StepNavigation';
import TextAreaField from '../../TextAreaField';

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
        type: EActionType.SET_DATA,
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
        nextIcon="fas fa-check"
        nextDisabled={loading}
        prevHandler={history.goBack}
        nextHandler={handleSubmit}
      />
    </section>
  );
};

export default AdditionalInformationStep;
