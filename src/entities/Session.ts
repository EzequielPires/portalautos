import { v4 as uuid } from 'uuid';
import {getData} from "../helpers/getData";

export class Session {
    id: string;
    created_at: string;
    constructor() {
        this.id = uuid();
        this.created_at = getData();
    }
    fromJson() {
        return JSON.stringify({
            id: this.id,
            created_at: this.created_at,
        })
    }
}