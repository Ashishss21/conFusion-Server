import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, aurthor, comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        dishId: dishId,
        rating: rating,
        aurthor: aurthor,
        comment: comment
    }
});