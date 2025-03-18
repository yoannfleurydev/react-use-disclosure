// @vitest-environment jsdom
import { renderHook, act } from "@testing-library/react";
import { useDisclosure } from "./index";
import { test, expect } from "vitest";

test("should open the state", () => {
  const { result } = renderHook(useDisclosure);

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.open();
  });

  expect(result.current.isOpen).toBe(true);
});

test("should close the state", () => {
  const { result } = renderHook(useDisclosure);

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.close();
  });

  expect(result.current.isOpen).toBe(false);
});

test("should toggle the state", () => {
  const { result } = renderHook(useDisclosure);

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.isOpen).toBe(false);
});

test("should toggle by given value", () => {
  const { result } = renderHook(useDisclosure);

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggle(false);
  });

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggle(true);
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggle(null);
  });

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggle("true");
  });

  expect(result.current.isOpen).toBe(true);
});
