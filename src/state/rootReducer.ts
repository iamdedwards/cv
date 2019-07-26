import { combineReducers, ReducersMapObject } from "redux";
import { WorkExperience, workExperienceReducer } from "./workExperienceReducer";

export interface AppState {
    workExperience: WorkExperience[];
};

const appReducer: ReducersMapObject<AppState> = {
    workExperience: workExperienceReducer
};

export default combineReducers(appReducer);