
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ApiRequest } from './api-request';
import { ApiAction } from './api-action';

/**
 * ApiActionFactory
 *
 * Generates all action types
 */
@Injectable()
export class ApiActionFactory {
  create<T = any>(
    route: string,
    request?: ApiRequest,
    payload?: T,
    error?: Error
  ): ApiAction {
    const type =  `[${route}] ${request}`;
    return error ?
      { type, route, request, payload, error } :
      { type, route, request, payload };
  }
}
