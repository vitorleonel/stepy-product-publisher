import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import InputField from "../../InputField";
import TextAreaField from "../../TextAreaField";

import { IBasicInformationStep } from "./interfaces";
import { EActionType } from "../../../store/interfaces";

const BasicInformationStep = ({ state, dispatch }: IBasicInformationStep) => {
  const history = useHistory();

  const [title, setTitle] = useState<string>(state.title);
  const [description, setDescription] = useState<string>(state.description);
  const [price, setPrice] = useState<number>(state.price);

  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if(!title || !description || !price) {
      setNextButtonIsDisabled(true);
    } else {
      setNextButtonIsDisabled(false);
    }
  }, [title, description, price]);

  const handleSubmit = () => {
    dispatch({ type: EActionType.SET_DATA, payload: { title, description, price } });
    history.push('/images');
  }

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });

    return formatter.format(price).replace('$', '');
  }

  const handlePrice = (currentPrice: string) => {
    const normalizedPrice = parseInt((currentPrice || '0').replace(/[^0-9]+/g, ''));

    setPrice(normalizedPrice);
  }

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
}

export default BasicInformationStep;
