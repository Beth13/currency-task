import { getTodaysCurrency } from '../../gateway/gateway';

export const CURR_RECEIVED = 'CURR_RECEIVED';

export const currencyReceived = curr => {
  const action = {
    type: CURR_RECEIVED,
    payload: {
      curr,
    },
  };

  return action;
};

export const getCurrList = value => {
  const thunkAction = function (dispatch) {
    getTodaysCurrency(value).then(curr => dispatch(currencyReceived(curr)));
  };

  return thunkAction;
};
