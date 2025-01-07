import { ObjectId } from 'mongodb';

export default interface iAccount{
    id?: ObjectId;
    user: string;
    password: string;
    status: boolean;
}