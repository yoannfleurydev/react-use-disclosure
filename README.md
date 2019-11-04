# useDisclosure

`useDiclosure` is a React custom hook to perform common open/close behavior on
modals, tooltips etc.

## 🔧 Installation

```sh
# Using yarn.
yarn add react-use-disclosure

# Using npm.
npm install react-use-disclosure
```

## 🔎 Usage

As `useDisclosure` return an object, you can get the key that you want:

```jsx
// At the top of your file.
import { useDisclosure } from "react-use-disclosure";

// Then, in your component.
const {
  isOpen: isModalOpen,
  open: openModal,
  close: closeModal
} = useDisclosure();

const { isOpen: isTooltipOpen, toggle: toggleTooltip } = useDiclosure(true);

// For the example, but the default value is false.
const { isOpen, open, close, toggle } = useDisclosure(false);
```
