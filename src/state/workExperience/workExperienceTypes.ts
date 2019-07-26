export interface WorkExperienceResponsibities {
    description: string;
    tags: string[];
}

export interface WorkExperience {
    company: string;
    responsibilites: WorkExperienceResponsibities[];
    from: Date;
    to: Date;
}