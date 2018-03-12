export interface ApiCommands<T> {
    getAll(): void;

    getById(id: any);

    getByQuery(query: string): void;

    create(entity: T): void;

    update(entity: Partial<T>): void;

    delete(id: any): void;

    delete(entity: T): void;
}
