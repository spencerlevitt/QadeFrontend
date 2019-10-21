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
    searchedFriends: [],
    isFetchingFriendRequests: false,
    isFetchingAcceptedFriends: false,
    isFetchingRejectedFriends: false,
    isFetchingSearchedFriends: false,
  },
  scoreConfirmation: {
    isFetchingScoreConfirmations: false,
    isAcceptingScoreConfirmations: false,
    isSubmittingScoreDispute: false,
    scoreConfirmations: [],
    scoresAccepted: [],
    scoreDisputes: []
  },
  gameCards: {
    cards: [],
    isSubmittingGameCards: false
  },
  gameRequests: {
    acceptedGameRequests: [],
    rejectedGameRequests: [],
    pendingGameRequests: [],
    submittedGameRequests: [],
    isFetchingAcceptedGameRequests: false,
    isFetchingPendingGameRequests: false,
    isAcceptingGameRequest: false,
    isRejectingGameRequest: false,
    isSenderCancelingGameRequest: false,
    isReceiverCancelingGameRequest: false,
    isSubmittingGameRequest: false,
  },
  errorMessage: {},
  hasError: false,
  isFetching: false,
  isUpdatingFOrLName: false,
  isUpdatingProfile: false,
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
  todaysMatches: {
    matches: [],
    isFetchingTodaysMatches: false
  },
  userDetails: {}
}
