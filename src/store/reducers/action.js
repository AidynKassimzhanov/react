import axios from 'axios';

export const fetchGames = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest()); // Опциональное действие для индикации загрузки данных


    const $host = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })    
    
    $host.get('api/v1/games')
      .then(response => {
        const data = response.data;
        dispatch(fetchDataSuccess(data)); // Действие для успешного получения данных
      })
      .catch(error => {
        dispatch(fetchDataFailure(error)); // Действие для обработки ошибки
      });
  };
};

export const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error
  };
};