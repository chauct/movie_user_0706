import instance from 'api/instance';
export const SET_MOVIES = 'booking/SET_MOVIES';
export const fetchMoviesAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: '/api/QuanLyPhim/LayDanhSachPhim',
      method: 'GET',
      params: {
        maNhom: 'GP03',
      },
    });
    dispatch({
      type: SET_MOVIES,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {}
};
