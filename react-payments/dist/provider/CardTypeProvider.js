import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import { defaultCardInfo } from "constants/index";
import useReady from "hooks/useReady";
import { isInValidCardType } from "util/validator";
export const CardTypeContext = createContext(null);
const CardTypeProvider = ({ children }) => {
    const [cardTypeInfo, setCardTypeInfo] = useState(defaultCardInfo);
    const [cardTypeReady] = useReady(cardTypeInfo.cardType, isInValidCardType);
    const onClickCardType = ({ cardType, cardName }) => {
        setCardTypeInfo({ cardType, cardName });
    };
    const resetCardTypeInfo = useCallback(() => {
        setCardTypeInfo(Object.assign({}, defaultCardInfo));
    }, []);
    return (_jsx(CardTypeContext.Provider, Object.assign({ value: {
            state: { cardTypeInfo, cardTypeReady },
            action: { onClickCardType, resetCardTypeInfo, setCardTypeInfo },
        } }, { children: children })));
};
export default CardTypeProvider;
//# sourceMappingURL=CardTypeProvider.js.map