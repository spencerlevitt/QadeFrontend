import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameRequestsReducer(state = initialState.gameRequests, action) {
  switch (action.type) {
    case types.LOAD_PENDING_GAME_REQUESTS_START:
      return {
        ...state,
        isFetchingPendingGameRequests: true,
      };

    case types.LOAD_PENDING_GAME_REQUESTS_SUCCESS:
      // Extract only the needed info for today's
      // matches: first_name, last_name, wager, game, 
      // win-loss record, win_percent, time_left (valid matches are < 24 hours)
      let loggedInUserId = action.pendingGameRequests.loggedInUserId;
      let pendingGameRequests = action.pendingGameRequests.data.map(pendingGame => {
        let senderId = pendingGame.sender.statistics.id;
        if (senderId !== loggedInUserId) {
          let time_left =  pendingGame.time_left_to_accept;
        
          // Split URL to get game request id and receiver id
          let urlArray = pendingGame.url.split('/');
          let id = urlArray[urlArray.length - 2];
          urlArray = pendingGame.receiver.profile.url.split('/');
          receiverId = urlArray[urlArray.length - 2];

          if (time_left) {
            return {
              id,
              receiverId,
              senderId,
              first_name: senderId === loggedInUserId ? pendingGame.receiver.first_name : pendingGame.sender.first_name,
              last_name: senderId === loggedInUserId ? pendingGame.receiver.last_name : pendingGame.sender.last_name,
              photo_url: senderId === loggedInUserId ? pendingGame.receiver.profile.photo_url : pendingGame.sender.profile.photo_url,
              won_games: senderId === loggedInUserId ? pendingGame.receiver.statistics.won_games : pendingGame.sender.statistics.won_games,
              lost_games: senderId === loggedInUserId ? pendingGame.receiver.statistics.lost_games : pendingGame.sender.statistics.lost_games,
              win_percent: senderId === loggedInUserId ? pendingGame.receiver.statistics.win_percent : pendingGame.sender.statistics.win_percent,
              wager: pendingGame.wager,
              game: pendingGame.game,
              time_left
            }
          }
        }

        return null;
      }).filter(match => match !== null);

      return {
        ...state,
        pendingGameRequests,
        isFetchingPendingGameRequests: false
      };

    case types.LOAD_PENDING_GAME_REQUESTS_ERROR:
      const { loadPendingGameRequestsError } = action;
      return {
        ...state,
        isFetchingPendingGameRequests: false,
        hasError: true,
        errorMessage: loadPendingGameRequestsError
      };

    case types.SUBMIT_GAME_REQUEST_START:
      return {
        ...state,
        isSubmittingGameRequest: true,
      };

    case types.SUBMIT_GAME_REQUEST_SUCCESS:
      // Extract only the needed info for today's
      // matches: first_name, last_name, wager, game, 
      // win-loss record, win_percent, time_left (valid matches are < 24 hours)
      loggedInUserId = action.submittedGameRequest.loggedInUserId;
      let submittedGame = action.submittedGameRequest.data;
      let submittedGameRequest = {};
      let senderId = submittedGame.sender.statistics.id;
      let time_left =  submittedGame.time_left_to_accept;
      
      // Split URL to get game request id and receiver id
      let urlArray = submittedGame.url.split('/');
      let id = urlArray[urlArray.length - 2];
      urlArray = submittedGame.receiver.profile.url.split('/');
      receiverId = urlArray[urlArray.length - 2];

      if (time_left) {
        submittedGameRequest = {
          id,
          receiverId,
          senderId,
          first_name: senderId === loggedInUserId ? submittedGame.sender.first_name : submittedGame.receiver.first_name,
          last_name: senderId === loggedInUserId ? submittedGame.sender.last_name : submittedGame.receiver.last_name,
          photo_url: senderId === loggedInUserId ? submittedGame.sender.profile.photo_url : submittedGame.receiver.profile.photo_url,
          won_games: senderId === loggedInUserId ? submittedGame.sender.statistics.won_games : submittedGame.receiver.statistics.won_games,
          lost_games: senderId === loggedInUserId ? submittedGame.sender.statistics.lost_games : submittedGame.receiver.statistics.lost_games,
          win_percent: senderId === loggedInUserId ? submittedGame.sender.statistics.win_percent : submittedGame.receiver.statistics.win_percent,
          wager: submittedGame.wager,
          game: submittedGame.game,
          time_left
        }
      }

      return {
        ...state,
        submittedGameRequest,
        isSubmittingGameRequest: false
      };

    case types.SUBMIT_GAME_REQUEST_ERROR:
      const { submitGameRequestError } = action;
      return {
        ...state,
        isSubmittingGameRequest: false,
        hasError: true,
        errorMessage: submitGameRequestError
      };

    case types.LOAD_ACCEPTED_GAME_REQUESTS_START:
      return {
        ...state,
        isFetchingAcceptedGameRequests: true,
      };

    case types.LOAD_ACCEPTED_GAME_REQUESTS_SUCCESS:
      // Extract only the needed info for today's
      // matches: first_name, last_name, wager, game, 
      // win-loss record, win_percent, time_left (valid matches are < 24 hours)
      loggedInUserId = action.acceptedGameRequests.loggedInUserId;
      acceptedGameRequests = action.acceptedGameRequests.data.map(acceptedGame => {
        let senderId = acceptedGame.sender.statistics.id;
        let time_left =  acceptedGame.time_left_to_submit;

        // Split URL to get game request id and receiver id
        let urlArray = acceptedGame.url.split('/');
        let id = urlArray[urlArray.length - 2];
        urlArray = acceptedGame.receiver.profile.url.split('/');
        receiverId = urlArray[urlArray.length - 2];

        if (time_left && acceptedGame.is_active) {
          return {
            id,
            receiverId,
            senderId,
            first_name: senderId === loggedInUserId ? acceptedGame.receiver.first_name : acceptedGame.sender.first_name,
            last_name: senderId === loggedInUserId ? acceptedGame.receiver.last_name : acceptedGame.sender.last_name,
            photo_url: senderId === loggedInUserId ? acceptedGame.receiver.profile.photo_url : acceptedGame.sender.profile.photo_url,
            won_games: senderId === loggedInUserId ? acceptedGame.receiver.statistics.won_games : acceptedGame.sender.statistics.won_games,
            lost_games: senderId === loggedInUserId ? acceptedGame.receiver.statistics.lost_games : acceptedGame.sender.statistics.lost_games,
            win_percent: senderId === loggedInUserId ? acceptedGame.receiver.statistics.win_percent : acceptedGame.sender.statistics.win_percent,
            wager: acceptedGame.wager,
            game: acceptedGame.game,
            time_left
          }
        }

        return null;
      }).filter(match => match !== null);

      return {
        ...state,
        acceptedGameRequests,
        isFetchingAcceptedGameRequests: false
      };

    case types.LOAD_ACCEPTED_GAME_REQUESTS_ERROR:
      const { loadAcceptedGameRequestsError } = action;
      return {
        ...state,
        isFetchingAcceptedGameRequests: false,
        hasError: true,
        errorMessage: loadAcceptedGameRequestsError
      };

    case types.ACCEPT_GAME_REQUEST_START:
      return {
        ...state,
        isAcceptingGameRequest: true,
      };

    case types.ACCEPT_GAME_REQUEST_SUCCESS:
      let acceptedRequest = action.acceptedGameRequest.data;
      urlArray = acceptedRequest.url.split('/');
      id = urlArray[urlArray.length - 2];
      urlArray = acceptedRequest.receiver.profile.url.split('/');
      receiverId = urlArray[urlArray.length - 2];
      urlArray = acceptedRequest.sender.profile.url.split('/');
      senderId = urlArray[urlArray.length - 2];
      time_left =  acceptedRequest.time_left_to_submit;

      acceptedRequest = {
        id,
        first_name: acceptedRequest.sender.first_name,
        last_name: acceptedRequest.sender.last_name,
        receiverId,
        photo_url: acceptedRequest.sender.profile.photo_url,
        senderId,
        status: acceptedRequest.status,
        win_percent: acceptedRequest.sender.statistics.win_percent,
        won_games: acceptedRequest.sender.statistics.won_games,
        wager: acceptedRequest.wager,
        game: acceptedRequest.game,
        lost_games: acceptedRequest.sender.statistics.lost_games,
        time_left
      };

      return {
        ...state,
        acceptedGameRequests: state.acceptedGameRequests.concat(acceptedRequest),
        isAcceptingGameRequest: false
      };

    case types.ACCEPT_GAME_REQUEST_ERROR:
      const { acceptGameRequestError } = action;
      return {
        ...state,
        isAcceptingGameRequest: false,
        hasError: true,
        errorMessage: acceptGameRequestError
      };

    case types.REJECT_GAME_REQUEST_START:
      return {
        ...state,
        isRejectingGameRequest: true,
      };

    case types.REJECT_GAME_REQUEST_SUCCESS:
      let rejectedRequest = action.rejectedGameRequest.data;
      urlArray = rejectedRequest.url.split('/');
      id = urlArray[urlArray.length - 2];

      pendingGameRequests = state.pendingGameRequests.map(gameRequest => {
        if (gameRequest.id === id) {
          return null;
        } else {
          return gameRequest;
        }
      }).filter(gameRequest => gameRequest !== null);

      rejectedRequest = {
        first_name: rejectedRequest.sender.first_name,
        last_name: rejectedRequest.sender.last_name,
        photo_url: rejectedRequest.sender.profile.photo_url,
        status: rejectedRequest.status
      };

      return {
        ...state,
        pendingGameRequests,
        rejectedGameRequests: state.rejectedGameRequests.concat(rejectedRequest),
        isRejectingGameRequest: false
      };

    case types.REJECT_GAME_REQUEST_ERROR:
      const { rejectGameRequestError } = action;
      return {
        ...state,
        isRejectingGameRequest: false,
        hasError: true,
        errorMessage: rejectGameRequestError
      };

    case types.SUBMIT_GAME_CARD_START:
      return {
        ...state,
        isSubmittingGameCards: true,
      };

    case types.SUBMIT_GAME_CARD_SUCCESS:
      let acceptedGameRequests = state.acceptedGameRequests
        .filter(acceptedGame => acceptedGame.id !== action.submittedGameCard.data.id && action.submittedGameCard.data.is_active);
      
      return {
        ...state,
        gameCards: state.gameCards.concat(action.submittedGameCard.data),
        acceptedGameRequests,
        isSubmittingGameCards: false
      };

    case types.SUBMIT_GAME_CARD_ERROR:
      const { submitGameCardError } = action;
      return {
        ...state,
        isSubmittingGameCards: false,
        hasError: true,
        errorMessage: submitGameCardError
      };

    default:
      return state;
  }
}
