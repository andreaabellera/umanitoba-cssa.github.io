// ResourceCategory interface

import { Resource } from "./resource";

export interface ResourceCategory {
    id: number;
    name: string;
    resources: Resource[];
}