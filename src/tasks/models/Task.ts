
import { Document } from 'mongoose';

export interface TaskInterface extends Document {
    id?: number;
    title: string;
    description: string;
    done: boolean
}