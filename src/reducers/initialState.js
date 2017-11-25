import authTokenHandler from '../utility/authTokenHandler';
const token = authTokenHandler.getAuthToken();

export default {
  authors:[],
  courses:[],
  users:[],
  comments: [],
  dictionaries: {},
  authorizedData: {listOfObjects:[], singleObject: {}},
  ajaxCallsInProgress: 0,
  authenticationData: { authenticated: token ? 1 : 0 }
};
