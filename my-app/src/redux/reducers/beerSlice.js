import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
let userInfo = {
  entities: [],
  loading: false,
  tempstore: Array.from({length:100})
}
var tempstore = [];
// export const getBeers = createAsyncThunk(
//     //action type string
//      '/getbeers',
//   // callback function
//   async (data, thunkAPI) => {
//     //if(tempstore[data.pageNo] != null){
//     const response = await  axios.get('https://api.punkapi.com/v2/beers?page='+data.pageNo+'&per_page=10');
//     //tempstore.push({pageno:data.pageNo,response:response.data});
//     if (response.status) {
//       console.log("after login:: ",response.data);
//       userInfo = response.data;
//       return userInfo;
//     } else {
//     }
//   //}
//   })

export default (state={},action) => {
  switch(action.type){
    case 'pages':
      return { ...state, ...{ pages: action.payload}}
    default:
      return state
  }
}

// export const beerSlice = createSlice({
//   name: 'beer',
//   initialState: { },
//   reducers: {
//     getbeer: (state, action) => {
//       // state.entities = action.payload;
//       switch(action.type){
//         case 'pages':
//           return { ...state, ...{ pages: action.payload}}
//       }
//     }

//   },
  // extraReducers: {
  //   [getBeers.pending]: (state,{meta}) => {
  //     state.loading = true
  //   },
  //   [getBeers.fulfilled]: (state, { meta,payload }) => {
  //     console.log("fulfilled:: ", payload);
  //       if (payload &&payload.token)
  //       localStorage.setItem("UserToken", payload.token);
  //     state.loading = false
  //     state.entities = payload
  //     state.tempstore = tempstore;
  //   },
  //   [getBeers.rejected]: (state, { meta,payload ,error}) => {
  //     console.log("rejected:: ", payload);
  //     state.loading = false
  //   },

  // }
// });
// export const { getbeer } = beerSlice.actions;
// export const beerReducer = beerSlice.reducer;
// export default beerReducer;