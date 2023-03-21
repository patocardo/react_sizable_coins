import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonText} from './Button.styles'
import { ButtonProps } from './Button.types';

const IconButton = ({ icon, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <ButtonText icon={icon}>{props.children}</ButtonText>
    </Button>
  );
};

export default IconButton;