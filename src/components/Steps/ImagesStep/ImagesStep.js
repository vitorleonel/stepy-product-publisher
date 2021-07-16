import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import StepHeader from '../../StepHeader';
import StepNavigation from '../../StepNavigation';
import Card from '../../Card';

const ImagesStep = ({ state, dispatch }) => {
  const history = useHistory();

  const [inputFileRef, setInputFileRef] = useState();
  const [images, setImages] = useState(state.images);

  const addImage = ({ target: { files } }) => {
    if (!files?.length) {
      return;
    }

    setImages([...images, ...Array.from(files)]);
  };

  const removeImage = (index) => {
    const newImages = images.filter(
      (_, currentIndex) => currentIndex !== index
    );

    setImages(newImages);
  };

  const handleSubmit = () => {
    dispatch({ type: EActionType.SET_DATA, payload: { images } });
    history.push('/additional-information');
  };

  return (
    <section className="steps-item">
      <StepHeader
        title="Images"
        description="Choose the best images to always make your product stand out. Do not insert watermarked images."
      />

      <input
        ref={(ref) => setInputFileRef(ref)}
        type="file"
        accept="image/*"
        multiple
        onChange={addImage}
      />

      <div className="images">
        {images.map((image, index) => (
          <Card
            className="images__item"
            onClick={() => removeImage(index)}
            key={index}
          >
            <img src={URL.createObjectURL(image)} alt={image.name} />
            {/* <Icon icon="trash" iconSize={IconSize.LARGE} /> */}
          </Card>
        ))}

        <Card
          className="images__item images__item--add"
          onClick={() => inputFileRef?.click()}
        >
          {/* <Icon icon="media" iconSize={IconSize.LARGE} /> */}
          <p>Click to add image(s)</p>
        </Card>
      </div>

      <StepNavigation
        nextText="Additional information"
        nextDisabled={!!!images.length}
        prevHandler={history.goBack}
        nextHandler={handleSubmit}
      />
    </section>
  );
};

export default ImagesStep;
