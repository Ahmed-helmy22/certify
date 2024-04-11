import { AiOutlineClose } from 'react-icons/ai';
import Wrapper from '../assets/wrappers/PopupStyled';

const Popup = ({children , trigger , setTrigger}) => {
  return   (trigger) ?  (
    <Wrapper>
      <div className='popup-inner'>
      
        {children}
        
      </div>
    </Wrapper>
  ) : "";
}

export default Popup