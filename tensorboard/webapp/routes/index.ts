/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {Component, Type} from '@angular/core';
import {RouteDef} from '../app_routing/route_config_types';
import {RouteKind} from '../app_routing/types';
import {FeatureFlagMetadataMap} from '../feature_flag/store/feature_flag_metadata';
import {FeatureFlagPageContainer} from '../feature_flag/views/feature_flag_page_container';
import {TensorBoardWrapperComponent} from '../tb_wrapper/tb_wrapper_component';
import {DashboardDeepLinkProvider} from './dashboard_deeplink_provider';

export function routesFactory(): RouteDef[] {
  return [
    {
      routeKind: RouteKind.EXPERIMENT,
      path: '/',
      ngComponent: TensorBoardWrapperComponent as Type<Component>,
      defaultRoute: true,
      deepLinkProvider: new DashboardDeepLinkProvider(FeatureFlagMetadataMap),
    },
    {
      routeKind: RouteKind.FLAGS,
      path: '/flags/',
      ngComponent: FeatureFlagPageContainer as Type<Component>,
    },
  ];
}
