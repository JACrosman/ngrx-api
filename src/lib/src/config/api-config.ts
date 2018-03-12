import { IdSelector, Comparer } from '../utils';

export interface ApiRoute<T = any, S extends object = {}> {
    name: string;
    path: string;
    useApiPrefix?: boolean;
    selectId?: IdSelector<T>;
    sortComparer?: false | Comparer<T>;
}

export interface ApiConfig {
    prefix?: string;
}

export type ApiRoutes = ApiRoute[];
