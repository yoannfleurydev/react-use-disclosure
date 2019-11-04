import { renderHook, act } from "@testing-library/react-hooks";
import { useDisclosure } from "./index";

test('should open the state', () => {
  const { result } = renderHook(() => useDisclosure());

  act(() => {
    result.current.open();
  })

  expect(result.current.isOpen).toBe(true);
})
