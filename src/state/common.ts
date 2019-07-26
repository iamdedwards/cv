import {Reducer }from "redux";

type Payload<T, TKey extends keyof T> = T[TKey] extends (state: unknown, payload: infer TPayload) => unknown ? 
    TPayload : never;

export interface AppAction<T> {
    type: keyof T;
    payload: Payload<T, keyof T>;
} 

export interface HasId {
    id: string;
}

type RecutionMap = { [K: string]: Function};

export function createReducer<S, R extends RecutionMap>(defaultState: S, reductions: R): Reducer<S> {
    return (
        experience = defaultState, 
        action: AppAction<R>
    ): S => { 
        if (reductions[action.type]) {
            reductions[action.type](experience, action.payload)
        }
        return experience;
    };
}

export function createActionCreators