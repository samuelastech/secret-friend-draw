 import { realizeDraw } from "./realizeDraw";
 
 describe('realize draw', () => {
  it('a person cannot take its own name', () => {
    const names = ['Moses', 'Benoni', 'Jacob', 'Kratos'];
    const draw = realizeDraw(names);
    names.forEach((ownPerson) => {
      const friend = draw.get(ownPerson);
      expect(friend).not.toBe(ownPerson);
    });
  });
 });