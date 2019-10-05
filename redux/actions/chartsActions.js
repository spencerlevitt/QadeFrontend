import * as types from '../actions/actionTypes';
import * as chartsApi from '../../api/chartsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadChartsDataStart() {
  return { type: types.LOAD_CHARTS_DATA_START };
}

export function loadChartsDataSuccess(chartsData) {
  return { type: types.LOAD_CHARTS_DATA_SUCCESS, chartsData };
}

export function loadChartsDataError(loadChartsDataError) {
  return { type: types.LOAD_STANDINGS_ERROR, loadChartsDataError };
}

export function loadChartsData(userId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadChartsDataStart());
    const periods = [1, 7, 30, 90, 365];
    const chartsData = periods.map(period => {
      chartsApi
        .getChartData(userId, period, csrfToken)
        .then(chartsData => {
          if (chartsData.status !== HttpStatus.OK) {
            const error = new Error(chartsData.statusMessage);
            dispatch(apiCallError(error));
            dispatch(loadChartsDataError(error));
          }

          chartsData.period = period;
          return dispatch(loadChartsDataSuccess(chartsData));
        }).catch(error => {
          dispatch(apiCallError(error));
          dispatch(loadChartsDataError(error));
          throw error;
        });
    });
    return chartsData;
  }
}