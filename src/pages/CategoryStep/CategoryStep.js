import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import StepHeader from '../../components/StepHeader';
import Card from '../../components/Card';

import Actions from '../../store/actions';

const CategoryStep = ({ dispatch }) => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setCategories([
      {
        id: 1,
        name: 'Fashion',
        description: 'T-shirts, pants, underwear and more.',
      },
      { id: 2, name: 'Food', description: 'Dairy, beverage and more.' },
      {
        id: 3,
        name: 'Technology',
        description: 'Cell phones, tablets, computers and more.',
      },
      {
        id: 4,
        name: 'Vehicles',
        description: 'Cars, trucks, motorcycle and more.',
      },
    ]);
  };

  const selectCategory = (category) => {
    dispatch({ type: Actions.SET_DATA, payload: { category } });
    history.push('/basic-information');
  };

  return (
    <section className="steps-item">
      <StepHeader
        title="Choose a category"
        description="Choose a category that best represents your product to start the publish process."
      />

      <div className="categories">
        {categories.map((category, index) => (
          <Card
            className="categories-item"
            onClick={() => selectCategory(category)}
            key={index}
          >
            <h4>{category.name}</h4>
            <p>{category.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryStep;
