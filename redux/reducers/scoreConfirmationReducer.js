import * as types from '../actions/actionTypes';
import initialState from './initialState';

const getTransformedScoreConfirmations = (scoreConfirmation, loggedInUserEmail) => {
  const win_or_loss = scoreConfirmation.winner.email === loggedInUserEmail ? 'won' : 'loss';
  let game_image_url = "";
          
  switch (scoreConfirmation.game_played) {
    case "FIFA":
      game_image_url = scoreConfirmation.FIFA19MatchData.image_url;
      break;

    case "MAD":
      game_image_url = scoreConfirmation.Madden19MatchData.image_url;
      break;

    case "NBA":
      game_image_url = scoreConfirmation.NBA19MatchData.image_url;
      break;

    case "NHL":
      game_image_url = scoreConfirmation.NHL19MatchData.image_url;
      break;
  
    default:
      break;
  }

  return {
    id: scoreConfirmation.id,
    opp_first_name: win_or_loss === 'won' ? scoreConfirmation.loser.first_name : scoreConfirmation.winner.first_name,
    opp_last_name: win_or_loss === 'won' ? scoreConfirmation.loser.last_name : scoreConfirmation.winner.last_name,
    opp_photo_url: win_or_loss === 'won' ? scoreConfirmation.loser.photo_url : scoreConfirmation.winner.photo_url,
    wager_amount: scoreConfirmation.wager_amount, 
    status: scoreConfirmation.status,
    game_played: scoreConfirmation.game_played,
    win_or_loss,
    game_image_url
  };
}

export default function scoreConfirmationReducer(state = initialState.scoreConfirmation, action) {
  switch (action.type) {
    case types.LOAD_SCORE_CONFIRMATION_START:
      return {
        ...state,
        isFetchingScoreConfirmations: true,
      };

    case types.LOAD_SCORE_CONFIRMATION_SUCCESS:
      // Extract only the needed info for score
      // confirmation screen
      const loggedInUserEmail = action.scoreConfirmations.loggedInUserEmail;
      
      // get pending score confirmations
      const scoreConfirmations = action.scoreConfirmations.data.map(scoreConfirmation => {
        if (scoreConfirmation.status === 0
            && (scoreConfirmation.winner.email === loggedInUserEmail
              || scoreConfirmation.loser.email === loggedInUserEmail)) {
    
          return getTransformedScoreConfirmations(scoreConfirmation, loggedInUserEmail);      
          
        } else {
          return null;
        }
      }).filter(scoreConfirmation => scoreConfirmation !== null);
      
      // get finshed score confirmation
      const scoresAccepted = action.scoreConfirmations.data.map(scoreAccepted => {
        if (scoreAccepted.status === 1
            && (scoreAccepted.winner.email === loggedInUserEmail
              || scoreAccepted.loser.email === loggedInUserEmail)) {
    
          return getTransformedScoreConfirmations(scoreAccepted, loggedInUserEmail);      
          
        } else {
          return null;
        }
      }).filter(scoreAccepted => scoreAccepted !== null);

      return {
        ...state,
        scoreConfirmations,
        scoresAccepted,
        isFetchingScoreConfirmations: false,
      };

    case types.LOAD_SCORE_CONFIRMATION_ERROR:
      const { loadScoreConfirmationsError } = action;
      return {
        ...state,
        isFetchingScoreConfirmations: false,
        hasError: true,
        errorMessage: loadScoreConfirmationsError
      };
    
    default:
        return state;
  }
}
  