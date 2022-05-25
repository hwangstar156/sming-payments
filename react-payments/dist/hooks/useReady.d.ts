declare const useReady: <S extends unknown, V extends (...args: any[]) => {}>(state: S, validator: V, data?: unknown) => boolean[];
export default useReady;
