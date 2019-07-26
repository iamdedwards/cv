import { AppAction } from "../common";
import { WorkExperience } from "./workExperienceTypes";
import * as Reductions from "./workExperienceReductions";




const defaultState: WorkExperience[] = [

];

export function workExperienceReducer(
    experience = defaultState, 
    action: AppAction<typeof Reductions>
): WorkExperience[] { 
    if (Reductions[action.type]) {
        Reductions[action.type](experience, action.payload)
    }
    return experience;
};
