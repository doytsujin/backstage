/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Common functionalities for the scaffolder, to be shared between scaffolder and scaffolder-backend plugin
 *
 * @packageDocumentation
 */

export * from './TaskSpec';
export { templateEntityV1beta2Validator } from './TemplateEntityV1beta2';
export type { TemplateEntityV1beta2 } from './TemplateEntityV1beta2';
export { templateEntityV1beta3Validator } from './TemplateEntityV1beta3';
export type { TemplateEntityV1beta3 } from './TemplateEntityV1beta3';