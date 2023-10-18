import { CategoryDTO } from "./category";

export type PruductDTO = {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
    categories: CategoryDTO[];
};