
import Checkbox, {Container} from './styles.js';

const Index = ({checked,handleCheckboxChange,text,feedback}) => {
  return (
    <Container>
    <label>
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span>{text}</span>
    </label>
  </Container> 
  )
};

export default Index;