import ImageText from "./ImageText";
import Placeholder from "./Placeholder";
import SampleComponent from "./SampleComponent";

const Components = {
  sample_component: SampleComponent,
  image_text: ImageText,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
