import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function standingsReducer(state = initialState.chartsData, action) {
  switch (action.type) {
    case types.LOAD_CHARTS_DATA_START:
      return {
        ...state,
        isFetchingChartsData: true,
      };

    case types.LOAD_CHARTS_DATA_SUCCESS:
      const chartsPeriod = {};
      const chartsData = {};
      const money = action.chartsData.data[0].money;
      const win_percent = action.chartsData.data[1].win_percent;
      
      // Pad charts data with zeros for proper chart rendering
      if(money.length < 6) {
          const diff = 6 - money.length;
          const zeros = new Array(diff).fill(0);
          chartsData.money = zeros.concat(money);  
      } else {
          chartsData.money = money;
      }
      
      if(win_percent.length < 6) {
          const diff = 6 - win_percent.length;
          const zeros = new Array(diff).fill(0);
          chartsData.win_percent = zeros.concat(win_percent);  
      } else {
          chartsData.win_percent = win_percent;
      }

      chartsPeriod[action.chartsData.period] = chartsData;
      
      const output = {
        ...state,
        data: {
          ...state.data,
          ...chartsPeriod
        },
        isFetchingChartsData: false,
      };
      
      return output;

    case types.LOAD_CHARTS_DATA_ERROR:
      const { loadChartsDataError } = action;
      return {
        ...state,
        isFetchingChartsData: false,
        hasError: true,
        errorMessage: loadChartsDataError
      };

    default:
      return state;
  }
}
