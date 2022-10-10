import { CURR_RECEIVED } from './currencyItem.actions';

const initialState = {
  curr: {
    curr: {},
  },
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURR_RECEIVED: {
      return {
        ...state,
        curr: action.payload,
      };
    }

    default:
      return state;
  }
};

export default currencyReducer;
