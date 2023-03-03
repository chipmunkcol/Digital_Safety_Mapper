import { atom, selector } from "recoil";

export const testState = atom({
  key:'testState',
  default: 1,
}) 

export const _testState = selector({
  key:'_testState',
  get: ({ get }) => get(testState),
  set: ({ set }, number ) => set(testState, number + 10)
})
