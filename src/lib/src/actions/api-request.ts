export const REQUEST_SUCCESS = '/success';

export const REQUEST_FAILURE = '/failure';

export enum ApiRequest {
    GET_ALL = 'ngrx-api/get-all',
    GET_ALL_SUCCESS = 'ngrx-api/get-all/success',
    GET_ALL_FAILURE = 'ngrx-api/get-all/failure',

    GET_BY = 'ngrx-api/get-by',
    GET_BY_SUCCESS = 'ngrx-api/get-by/success',
    GET_BY_FAILURE = 'ngrx-api/get-by/failure',

    CREATE = 'ngrx-api/create',
    CREATE_SUCCESS = 'ngrx-api/create/success',
    CREATE_FAILURE = 'ngrx-api/create/failure',

    PUT = 'ngrx-api/put',
    PUT_SUCCESS = 'ngrx-api/put/success',
    PUT_FAILURE = 'ngrx-api/put/failure',

    DELETE = 'ngrx-api/update',
    DELETE_SUCCESS = 'ngrx-api/update/success',
    DELETE_FAILURE = 'ngrx-api/update/failure',
}
