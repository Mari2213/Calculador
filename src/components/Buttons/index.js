
import { ButtonContainer } from "./style";

const Buttons = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
export default Buttons;
  