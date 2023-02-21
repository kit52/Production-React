import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1'])).toBe('someClass class1');
  });
  test('with mods class', () => {
    const expected = 'someClass class1 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1'],
    )).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1'],
    )).toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['class1'],
    )).toBe(expected);
  });
});
