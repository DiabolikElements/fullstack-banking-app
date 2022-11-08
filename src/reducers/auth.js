import { SIGN_IN, SIGN_OUT } from "../utils/constants";

const authReducer = (state = {}, actions) => {
    switch (actions.type) {
        case SIGN_IN:
            return action.user;
        case SIGN_OUT:
            return {};
        default:
            return state;
    }
};

export default authReducer;