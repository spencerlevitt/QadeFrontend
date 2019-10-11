export default {
  apiCallsInProgress: 0,
  csrfToken: '',
  chartsData: {
    isFetchingChartsData: false,
    data: {
      1: {
        money: [],
        win_percent: []
      },
      7: {
        money: [],
        win_percent: []
      },
      30: {
        money: [],
        win_percent: []
      },
      90: {
        money: [],
        win_percent: []
      },
      365: {
        money: [],
        win_percent: []
      }
    }
  },
  friendRequests: {
    pendingFriends: [],
    acceptedFriends: [],
    rejectedFriends: [],
    isFetchingFriendRequests: false,
    isFetchingAcceptedFriends: false,
    isFetchingRejectedFriends: false,
  },
  gameRequests: {
    acceptedGameRequests: [],
    rejectedGameRequests: [],
    pendingGameRequests: [],
    todaysMatches: [],
    isFetchingAcceptedGameRequests: false,
    isFetchingPendingGameRequests: false,
    isFetchingTodaysMatches: false,
    isAcceptingGameRequest: false,
    isRejectingGameRequest: false,
    isSenderCancelingGameRequest: false,
    isReceiverCancelingGameRequest: false,
  },
  errorMessage: {},
  hasError: false,
  isFetching: false,
  loggedIn: false,
  loggedInUser: {},
  signedUpUser: {},
  stats: {},
  standings: {
    isFetchingStandings: false,
    nba: [],
    fifa: [],
    madden: [],
    nhl: []
  },
  userDetails: {}
}
