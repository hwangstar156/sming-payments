import { AllFetchingCardDataType } from "types";
declare function useFetch(url: string): {
    data: AllFetchingCardDataType | null;
    loading: boolean;
};
export default useFetch;
