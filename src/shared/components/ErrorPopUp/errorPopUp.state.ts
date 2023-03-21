import { atom } from 'recoil';

export const errorPopUpState = atom({
  key: 'errorState',
  default: {
    message: '',
    isOpen: false,
    cause: '',
  },
});
