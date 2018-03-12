import { ModuleWithProviders, NgModule, InjectionToken } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ApiRoute, ApiRoutes, ApiConfig } from './config';

export const NGRX_API_CONFIGURATION = new InjectionToken<ApiConfig>('NGRX_API_CONFIG');
export const NGRX_API_ROUTES = new InjectionToken<ApiRoutes>('NGRX_API_ROUTES');

export function provideApiRoutes(routes: ApiRoutes): any {
    return [
        { provide: NGRX_API_ROUTES, multi: true, useValue: routes },
    ];
}

@NgModule({
    imports: [
    //   StoreModule.forFeature(ENTITY_CACHE_NAME, ENTITY_REDUCER_TOKEN),
    //   EffectsModule.forFeature(entityEffects)
    ],
    providers: [
    ]
})
export class NgrxApiModule {
    static forRoot(routes: ApiRoutes, config: ApiConfig): ModuleWithProviders {
      return {
        ngModule: NgrxApiModule,
        providers: [
            provideApiRoutes(routes),
            { provide: NGRX_API_CONFIGURATION, useValue: config || { } }
        ]
      };
    }

    static forChild(routes: ApiRoutes): ModuleWithProviders {
        return { ngModule: NgrxApiModule, providers: [provideApiRoutes(routes)] };
    }
}
