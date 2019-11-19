const { useCallback, useState } = require("react");

module.exports = {
  useDisclosure: (isOpenDefault = false) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(state => !state), []);

    return { isOpen, open, close, toggle };
  }
};
