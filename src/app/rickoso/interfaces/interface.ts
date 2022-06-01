export interface Pj {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Genderless = "Genderless",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Animal = "Animal",
    Cronenberg = "Cronenberg",
    Disease = "Disease",
    Human = "Human",
    Humanoid = "Humanoid",
    Mytholog = "Mytholog",
    Parasite = "Parasite",
    Poopybutthole = "Poopybutthole",
    Robot = "Robot",
    Unknown = "unknown",
    Vampire = "Vampire",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
