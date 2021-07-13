import { PanelProps, Card } from "@blueprintjs/core";
import { useEffect, useState } from "react";

import StepHeader from "../../StepHeader";
import BasicInformationStep from "../BasicInformationStep";

import { CategoryItem } from "./interfaces";

const CategoryStep = (props: PanelProps<{}>): JSX.Element => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setCategories([
      { id: 1, name: 'Fashion', description: 'T-shirts, pants, underwear and more.' },
      { id: 2, name: 'Food', description: 'Dairy, beverage and more.' },
      { id: 3, name: 'Technology', description: 'Cell phones, tablets, computers and more.' },
      { id: 4, name: 'Vehicles', description: 'Cars, trucks, motorcycle and more.' },
    ]);
  }

  const openPanel = (category: CategoryItem) => props.openPanel({
    renderPanel: BasicInformationStep,
    title: "BasicInformationStep",
    props: {
      category,
    },
  });

  return (
    <section className="steps-item">
      <StepHeader
        title="Choose a category"
        description="Choose a category that best represents your product to start the publish process."
      />

      <div className="categories">
        {categories.map((category, index) => (
          <Card className="categories-item" interactive onClick={() => openPanel(category)} key={index}>
            <h4 className="bp3-heading">{category.name}</h4>
            <p className="bp3-running-text bp3-text-large">{category.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default CategoryStep;
