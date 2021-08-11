import React, { createContext } from 'react';
import { useReducer } from 'react';
import { authReducer } from './authReducer';

/* Definir cómo luce, qué  información tendré aquí */
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

/* Estado inicial */
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
};

/* Lo usaremos para decirle a React cómo luce y qué expone el context */
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

/* Crear el contexto */
export const AuthContext = createContext({} as AuthContextProps);

/* Componente que es el proveedor del estado */
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const logOut = () => {
        dispatch({ type: 'logOut' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };


    const changeUserName = (userName: string) => {
        dispatch({ type: 'changeUsername', payload: userName });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    );
};
