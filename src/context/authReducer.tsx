import { AuthState } from './AuthContext';


type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string }

export const authReducer = (state: AuthState, accion: AuthAction): AuthState => {

    switch (accion.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: accion.payload
            };
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                favoriteIcon: undefined,
                username: undefined
            };
        case 'changeUsername':
            return {
                ...state,
                username: accion.payload
            };
        default:
            return state;
    }
};
