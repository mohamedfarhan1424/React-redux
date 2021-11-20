const initState = {
  name: "",
  email: "",
  isAuthenticated: false,
  companyname: "",
  employeeid: 0,
  employee: [],
  data:{},
};
export function reducer(state = initState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "ADD_COMPANY":
      return {
        ...state,
        companyname: action.companyname,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employee: state.employee.concat({
          key: state.employeeid,
          name: action.payload.name,
          email: action.payload.email,
          role: action.payload.role,
        }),
        employeeid: state.employeeid + 1,
      };
      case "SET_DATA":
        return{
          ...state,
          data:action.payload,
        }
    case "LOGOUT":
      return {
        ...initState,
      };

    default:
      return { ...state };
  }
}
