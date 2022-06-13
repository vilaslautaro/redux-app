export default function setUserList(state, action) {
        state.list = action.payload;
        return state;
}
