const initialState = [];
const notification = (state = initialState, action) => {
  switch (action.type) {
    case "PUSH_NOTIFICATION":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default notification;
