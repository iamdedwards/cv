import { WorkExperience } from "./workExperienceTypes";

export function addWorkExperience(allExperience: WorkExperience[], newExperience: WorkExperience): WorkExperience[] {
    return [...allExperience, newExperience ];
}

export function addWorkExperience2(allExperience: WorkExperience[], newExperience: boolean): WorkExperience[] {
    return newExperience ?  allExperience : [];
}