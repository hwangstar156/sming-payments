import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../provider/ErrorContext";
import { AllFetchingCardDataType } from "../types";

function useFetch(url: string) {
  const [data, setData] = useState<AllFetchingCardDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const errorContext = useContext(ErrorContext);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("서버에서 데이터를 불러오는데 실패했습니다");
        }
        const data: AllFetchingCardDataType = (await res.json()).data;
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          if (!errorContext) {
            console.log("Cannot find ErrorContext");
            return;
          }
          const { setError } = errorContext;
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, [url, errorContext]);

  return { data, loading };
}
export default useFetch;
