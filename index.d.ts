interface IDisclosure {
  isOpen?: boolean;
  open?: () => void;
  close?: () => void;
  toggle?: () => void;
}

/**
 * The function to call to get the utlility methods and the boolean of the state.
 * @returns An object of `isOpen, open, close, toggle`
 */
declare export function useDisclosure(isOpenDefault?: boolean = false): IDisclosure;
