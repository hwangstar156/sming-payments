import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer } from "react";
import { REDUCER_TYPE } from "constants/index";
export const initCardDataAction = (cardData) => ({
    type: REDUCER_TYPE.INIT,
    payload: cardData,
});
export const editCardDataAction = (editedData) => ({
    type: REDUCER_TYPE.EDIT,
    payload: editedData,
});
export const deletedCardDataAction = ({ id }) => ({
    type: REDUCER_TYPE.DELETE,
    payload: { id },
});
export const CardDataContext = createContext(null);
const initialState = {};
const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_TYPE.EDIT: {
            const cards = Object.assign({}, state);
            const card = cards[action.payload.id];
            cards[action.payload.id] = Object.assign(Object.assign({}, card), action.payload);
            return Object.assign({}, cards);
        }
        case REDUCER_TYPE.DELETE: {
            const cards = Object.assign({}, state);
            delete cards[action.payload.id];
            return Object.assign({}, cards);
        }
        case REDUCER_TYPE.INIT:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
const CardDataProvider = ({ children }) => {
    const [cardData, dispatch] = useReducer(reducer, initialState);
    return (_jsx(CardDataContext.Provider, Object.assign({ value: { cardData, dispatch } }, { children: children })));
};
export default CardDataProvider;
//# sourceMappingURL=CardDataProvider.js.map