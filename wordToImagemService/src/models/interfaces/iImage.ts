import { ObjectId } from "mongodb";

export default interface iImage{
    id?: ObjectId;
    source: string;
    date: Date;
    status: boolean;
    alt: string;
}