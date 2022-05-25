var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_URL } from "constants/index";
export const getCardList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${API_URL}/api/cards`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        return yield response.json();
    }
    catch (err) {
        throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
    }
});
export const registerCard = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${API_URL}/api/car`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ data }),
        });
        if (!res.ok) {
            throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
        }
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
});
export const editCard = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch(`${API_URL}/api/cards/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ data }),
        });
    }
    catch (err) {
        throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
    }
});
export const deleteCard = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch(`${API_URL}/api/cards/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        });
    }
    catch (err) {
        throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
    }
});
//# sourceMappingURL=cardApi.js.map