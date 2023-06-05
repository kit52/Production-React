import { DeepPartial } from '@reduxjs/toolkit';
import { counterReducer, counterActions } from './counterSlice';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';

describe('COUNTERSLICE', () => {
  test('decr', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test('incr', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
