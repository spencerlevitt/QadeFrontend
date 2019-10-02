export default {
  loggedIn: false,
  loggedInUser: {},
  signedUpUser: {},
  isFetching: false,
  csrfToken: '',
  hasError: false,
  errorMessage: {},
  userDetails: {},
  stats: {},
  standings: {
    isFetchingStandings: false,
    nba: [],
    fifa: [],
    madden: [],
    nhl: []
  },
  apiCallsInProgress: 0
}
