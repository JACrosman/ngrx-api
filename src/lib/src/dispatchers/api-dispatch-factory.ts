import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IdSelector, defaultSelectId } from '../utils';
import { ApiAction, ApiActionFactory, ApiRequest } from '../actions';
import { ApiCommands } from './api-commands';

@Injectable()
export class ApiDispatcherFactory {
  constructor(
    private entityActionFactory: ApiActionFactory,
    private store: Store<EntityCache>
  ) {}

  /**
   * Create an `EntityDispatcher` for an entity type `T` and store.
   */
  create<T>(
    /** Route */
    name: string,
    /**
     * Function that returns the primary key for an entity `T`.
     * Usually acquired from `EntityDefinition` metadata.
     */
    selectId: IdSelector<T> = defaultSelectId,
    /** Options that influence dispatcher behavior such as whether
     * `add()` is optimistic or pessimistic;
     */
    dispatcherOptions: Partial<EntityDispatcherOptions> = {}
  ): EntityDispatcher<T> {
    // merge w/ dispatcher options with defaults
    const options: EntityDispatcherOptions =
      Object.assign({}, this.defaultDispatcherOptions, dispatcherOptions);
    return new EntityDispatcherBase<T>(entityName, this.entityActionFactory, this.store, selectId, options)}
}

