import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ErrorPhar, PopUp, PopUpContainer } from './ErrorPopUp.styles';
import { errorPopUpState } from './errorPopUp.state';

/**
 * A React component that handles error Pop Up state
 * It displays a message and log the cause
 * @returns {JSX.Element} The rendered ErrorPopUp component.
*/
const ErrorPopUp = () => {
  const [error, setError] = useRecoilState(errorPopUpState);

  const handleClose = () => {
    setError({ message: '', isOpen: false, cause: '' });
  };

  useEffect(() => {
    if(error.cause) {
      console.error(error.cause);
    }
  }, [error.cause]);

  return (
    <>
      {error.isOpen && (
        <PopUpContainer>
          <PopUp>
            <ErrorPhar>{error.message}</ErrorPhar>
            <button onClick={handleClose}>Close</button>
          </PopUp>
        </PopUpContainer>
      )}
    </>
  );
};

export default ErrorPopUp;
