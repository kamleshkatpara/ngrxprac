import { loginSuccess, signUpSuccess, autoLogout } from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        };
    }),
    on(signUpSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        };
    }),
    on(autoLogout, (state) => {
        return {
            ...state,
            user: null,
        };
    })
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}