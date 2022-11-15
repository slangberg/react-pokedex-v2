import globalReducer, {
    GlobalState,
  } from './globalSlice';
  
  describe('counter reducer', () => {
    const initialState: GlobalState = { loading: false, history: [], spriteIndex: 0 };
    it('should handle initial state', () => {
      expect(globalReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    // it('should handle increment', () => {
    //   const actual = counterReducer(initialState, increment());
    //   expect(actual.value).toEqual(4);
    // });
  });
  