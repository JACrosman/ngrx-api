
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ApiRequest } from './api-request';

/**
 * Ngrx Store Action interface for all api acitons
 */
export interface ApiAction<T = any> extends Action {
    readonly type: string;
    readonly route: string;
    readonly request: ApiRequest;
    readonly payload?: T;
    error?: Error;
}
