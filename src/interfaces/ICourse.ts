import { ILesson } from './ILesson';

export interface ICourse {
    id?: number;
    title: string;
    author: string;
    description: string;
    price: number;
    price_text: string;
    image: string;
    lessons: ILesson[];
}