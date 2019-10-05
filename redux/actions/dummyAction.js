
import { SET_TEXT } from '../types/types'

export const dummyAction = (data) => {
    return {
        types: SET_TEXT,
        payload: {
            data
        }
    }
}