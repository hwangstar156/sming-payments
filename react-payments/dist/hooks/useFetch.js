var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "provider/ErrorContext";
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const errorContext = useContext(ErrorContext);
    if (!errorContext) {
        throw new Error("Cannot find ErrorContext");
    }
    const { setError } = errorContext;
    useEffect(() => {
        const callApi = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(url, {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                });
                if (!res.ok) {
                    throw new Error("서버에서 데이터를 불러오는데 실패했습니다");
                }
                const data = (yield res.json()).data;
                setData(data);
            }
            catch (err) {
                if (err instanceof Error) {
                    setError(err);
                }
            }
            finally {
                setLoading(false);
            }
        });
        callApi();
    }, [url, setError]);
    return { data, loading };
}
export default useFetch;
//# sourceMappingURL=useFetch.js.map