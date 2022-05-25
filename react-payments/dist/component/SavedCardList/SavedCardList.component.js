import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from "react";
import CardPreview from "component/CardPreview/CardPreview.component";
import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";
import useFetch from "hooks/useFetch";
import { API_URL } from "constants/index";
import { CardDataContext, initCardDataAction } from "provider/CardDataProvider";
const SavedCardList = () => {
    const { data, loading } = useFetch(`${API_URL}/api/cards`);
    const cardDataContext = useContext(CardDataContext);
    if (!cardDataContext) {
        throw new Error("Cannot find CardDataContext");
    }
    const { cardData, dispatch } = cardDataContext;
    useEffect(() => {
        if (!data) {
            return;
        }
        dispatch(initCardDataAction(data));
    }, [dispatch, data]);
    return (_jsx(_Fragment, { children: loading ? (_jsxs(_Fragment, { children: [_jsx(SkeletonCardBox, {}), _jsx(SkeletonCardBox, {})] })) : (Object.entries(cardData).map(([id, cardDatum]) => (_jsx("div", { children: _jsx(CardPreview, { cardDatum: cardDatum }) }, id)))) }));
};
export default SavedCardList;
//# sourceMappingURL=SavedCardList.component.js.map