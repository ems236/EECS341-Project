import { Recipe } from './recipe';

export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    savedRecipes?: Recipe[];
}