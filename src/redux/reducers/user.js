// Esse reducer será responsável por tratar as informações da pessoa usuária
const estadoInicialUser = {
  email: '',
  logged: false
};

function user(state = estadoInicialUser, action) {
  if (action.type === 'login') {
    return { email: action.value, logged: true };
  }

  if(action.type === "logout") {
    return { email: "", logged: false };
  }
  return state;
}
export default user;
