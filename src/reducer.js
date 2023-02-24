//inisialisasi count = 0
let initialState = {count: 0}


//fungsi untuk reducer setiap increment
//dimana setiap klik akan bertambah dan berkurang 1
//reset untuk mengubah nilai menjadi 0 kembali
function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    };
  }
  if(action.type === 'DECREMENT') {
    return {
      count: state.count - 1
    }
  }
  if(action.type === 'RESET') {
    return {
      count: state.count = 0
    }
  }

  return state;
}

export default reducer;