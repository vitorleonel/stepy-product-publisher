import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import StepHeader from '../../components/StepHeader';
import StepNavigation from '../../components/StepNavigation';
import InputField from '../../components/InputField';
import TextAreaField from '../../components/TextAreaField';

import Actions from '../../store/actions';

const BasicInformationStep = ({ state, dispatch }) => {
  const history = useHistory();

  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);
  const [price, setPrice] = useState(state.price);

  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState(true);

  useEffect(() => {
    if (!title || !description || !price) {
      setNextButtonIsDisabled(true);
    } else {
      setNextButtonIsDisabled(false);
    }
  }, [title, description, price]);

  const handleSubmit = () => {
    dispatch({
      type: Actions.SET_DATA,
      payload: { title, description, price },
    });
    history.push('/images');
  };

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });

    return formatter.format(price).replace('$', '');
  };

  const handlePrice = (currentPrice) => {
    const normalizedPrice = parseInt(
      (currentPrice || '0').replace(/[^0-9]+/g, '')
    );

    setPrice(normalizedPrice);
  };

  return (
    <section className="steps-item">
      <StepHeader
        title="Basic information"
        description="Take care in the title and description of the product as this is a very important factor when the user will decide for your product."
      />

      <InputField
        name="title"
        label="Title"
        placeholder="Your product's title"
        id="title-input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <TextAreaField
        rows={5}
        name="description"
        label="Description"
        placeholder="Your product's description"
        id="description-input"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <InputField
        name="price"
        label="Price"
        placeholder="Your product's price"
        id="price-input"
        value={formatPrice(price)}
        onChange={(event) => handlePrice(event.target.value)}
      />

      <StepNavigation
        nextText="Images"
        nextDisabled={nextButtonIsDisabled}
        prevHandler={history.goBack}
        nextHandler={handleSubmit}
      />
    </section>
  );
};

export default BasicInformationStep;
