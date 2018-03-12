

/**
 * Default function that returns the entity's primary key (pkey).
 * Assumes that the entity has an `id` pkey property.
 * Returns `undefined` if no entity or `id`.
 * Every selectId fn must return `undefined` when it cannot produce a full pkey.
 */
export function defaultSelectId(entity: any) {
    return entity == null ? undefined : entity.id;
  }