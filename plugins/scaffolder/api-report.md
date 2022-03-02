## API Report File for "@backstage/plugin-scaffolder"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiHolder } from '@backstage/core-plugin-api';
import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { Extension } from '@backstage/core-plugin-api';
import { ExternalRouteRef } from '@backstage/core-plugin-api';
import { FetchApi } from '@backstage/core-plugin-api';
import { FieldProps } from '@rjsf/core';
import { FieldValidation } from '@rjsf/core';
import { IconButton } from '@material-ui/core';
import { JsonObject } from '@backstage/types';
import { JSONSchema7 } from 'json-schema';
import { JsonValue } from '@backstage/types';
import { Observable } from '@backstage/types';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';
import { ScmIntegrationRegistry } from '@backstage/integration';
import { TaskSpec } from '@backstage/plugin-scaffolder-common';
import { TemplateEntityV1beta2 } from '@backstage/plugin-scaffolder-common';

// @public
export function createScaffolderFieldExtension<
  TReturnValue = unknown,
  TInputProps = unknown,
>(
  options: FieldExtensionOptions<TReturnValue, TInputProps>,
): Extension<FieldExtensionComponent<TReturnValue, TInputProps>>;

// @public
export type CustomFieldValidator<TFieldReturnValue> = (
  data: TFieldReturnValue,
  field: FieldValidation,
  context: {
    apiHolder: ApiHolder;
  },
) => void;

// Warning: (ae-missing-release-tag) "EntityNamePickerFieldExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityNamePickerFieldExtension: FieldExtensionComponent<
  string,
  {}
>;

// Warning: (ae-missing-release-tag) "EntityPickerFieldExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityPickerFieldExtension: FieldExtensionComponent<
  string,
  EntityPickerUiOptions
>;

// Warning: (ae-missing-release-tag) "EntityPickerUiOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface EntityPickerUiOptions {
  // (undocumented)
  allowArbitraryValues?: boolean;
  // (undocumented)
  allowedKinds?: string[];
  // (undocumented)
  defaultKind?: string;
}

// @public
export const EntityTagsPickerFieldExtension: FieldExtensionComponent<
  string[],
  EntityTagsPickerUiOptions
>;

// Warning: (ae-missing-release-tag) "EntityTagsPickerUiOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface EntityTagsPickerUiOptions {
  // (undocumented)
  kinds?: string[];
}

// Warning: (ae-forgotten-export) The symbol "Props" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "FavouriteTemplate" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const FavouriteTemplate: (props: Props) => JSX.Element;

// @public
export type FieldExtensionComponent<_TReturnValue, _TInputProps> = () => null;

// @public
export interface FieldExtensionComponentProps<
  TFieldReturnValue,
  TUiOptions extends {} = {},
> extends FieldProps<TFieldReturnValue> {
  // (undocumented)
  uiSchema: FieldProps['uiSchema'] & {
    'ui:options'?: TUiOptions;
  };
}

// @public
export type FieldExtensionOptions<
  TFieldReturnValue = unknown,
  TInputProps = unknown,
> = {
  name: string;
  component: (
    props: FieldExtensionComponentProps<TFieldReturnValue, TInputProps>,
  ) => JSX.Element | null;
  validation?: CustomFieldValidator<TFieldReturnValue>;
};

// Warning: (ae-missing-release-tag) "JobStatus" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type JobStatus = 'PENDING' | 'STARTED' | 'COMPLETED' | 'FAILED';

// Warning: (ae-missing-release-tag) "ListActionsResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ListActionsResponse = Array<{
  id: string;
  description?: string;
  schema?: {
    input?: JSONSchema7;
    output?: JSONSchema7;
  };
}>;

// Warning: (ae-missing-release-tag) "LogEvent" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type LogEvent = {
  type: 'log' | 'completion';
  body: {
    message: string;
    stepId?: string;
    status?: ScaffolderTaskStatus;
  };
  createdAt: string;
  id: string;
  taskId: string;
};

// Warning: (ae-missing-release-tag) "OwnedEntityPickerFieldExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const OwnedEntityPickerFieldExtension: FieldExtensionComponent<
  string,
  OwnedEntityPickerUiOptions
>;

// Warning: (ae-missing-release-tag) "OwnedEntityPickerUiOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface OwnedEntityPickerUiOptions {
  // (undocumented)
  allowedKinds?: string[];
  // (undocumented)
  defaultKind?: string;
}

// Warning: (ae-missing-release-tag) "OwnerPickerFieldExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const OwnerPickerFieldExtension: FieldExtensionComponent<
  string,
  OwnerPickerUiOptions
>;

// Warning: (ae-missing-release-tag) "OwnerPickerUiOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface OwnerPickerUiOptions {
  // (undocumented)
  allowedKinds?: string[];
}

// Warning: (ae-missing-release-tag) "repoPickerValidation" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const repoPickerValidation: (
  value: string,
  validation: FieldValidation,
  context: {
    apiHolder: ApiHolder;
  },
) => void;

// Warning: (ae-missing-release-tag) "RepoUrlPickerFieldExtension" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const RepoUrlPickerFieldExtension: FieldExtensionComponent<
  string,
  RepoUrlPickerUiOptions
>;

// Warning: (ae-missing-release-tag) "RepoUrlPickerUiOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface RepoUrlPickerUiOptions {
  // (undocumented)
  allowedHosts?: string[];
  // (undocumented)
  allowedOwners?: string[];
  // (undocumented)
  requestUserCredentials?: {
    secretsKey: string;
    additionalScopes?: {
      github?: string[];
      gitlab?: string[];
      bitbucket?: string[];
      azure?: string[];
    };
  };
}

// Warning: (ae-missing-release-tag) "RouterProps" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type RouterProps = {
  TemplateCardComponent?:
    | ComponentType<{
        template: TemplateEntityV1beta2;
      }>
    | undefined;
  TaskPageComponent?: ComponentType<{}>;
  components?: {
    TemplateCardComponent?:
      | ComponentType<{
          template: TemplateEntityV1beta2;
        }>
      | undefined;
    TaskPageComponent?: ComponentType<{}>;
  };
  groups?: Array<{
    title?: string;
    titleComponent?: React_2.ReactNode;
    filter: (entity: Entity) => boolean;
  }>;
};

// @public
export interface ScaffolderApi {
  // (undocumented)
  getIntegrationsList(
    options: ScaffolderGetIntegrationsListOptions,
  ): Promise<ScaffolderGetIntegrationsListResponse>;
  // (undocumented)
  getTask(taskId: string): Promise<ScaffolderTask>;
  // (undocumented)
  getTemplateParameterSchema(
    templateRef: string,
  ): Promise<TemplateParameterSchema>;
  listActions(): Promise<ListActionsResponse>;
  scaffold(
    options: ScaffolderScaffoldOptions,
  ): Promise<ScaffolderScaffoldResponse>;
  // (undocumented)
  streamLogs(options: ScaffolderStreamLogsOptions): Observable<LogEvent>;
}

// @public
export const scaffolderApiRef: ApiRef<ScaffolderApi>;

// @public
export class ScaffolderClient implements ScaffolderApi {
  constructor(options: {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
    scmIntegrationsApi: ScmIntegrationRegistry;
    useLongPollingLogs?: boolean;
  });
  // (undocumented)
  getIntegrationsList(
    options: ScaffolderGetIntegrationsListOptions,
  ): Promise<ScaffolderGetIntegrationsListResponse>;
  // (undocumented)
  getTask(taskId: string): Promise<ScaffolderTask>;
  // (undocumented)
  getTemplateParameterSchema(
    templateRef: string,
  ): Promise<TemplateParameterSchema>;
  // (undocumented)
  listActions(): Promise<ListActionsResponse>;
  scaffold(
    options: ScaffolderScaffoldOptions,
  ): Promise<ScaffolderScaffoldResponse>;
  // (undocumented)
  streamLogs(options: ScaffolderStreamLogsOptions): Observable<LogEvent>;
}

// @public
export const ScaffolderFieldExtensions: React_2.ComponentType;

// Warning: (ae-missing-release-tag) "ScaffolderGetIntegrationsListOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ScaffolderGetIntegrationsListOptions {
  // (undocumented)
  allowedHosts: string[];
}

// Warning: (ae-missing-release-tag) "ScaffolderGetIntegrationsListResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ScaffolderGetIntegrationsListResponse {
  // (undocumented)
  integrations: {
    type: string;
    title: string;
    host: string;
  }[];
}

// Warning: (ae-missing-release-tag) "ScaffolderPage" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const ScaffolderPage: (props: RouterProps) => JSX.Element;

// Warning: (ae-missing-release-tag) "scaffolderPlugin" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const scaffolderPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {
    registerComponent: ExternalRouteRef<undefined, true>;
  }
>;

// Warning: (ae-missing-release-tag) "ScaffolderScaffoldOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ScaffolderScaffoldOptions {
  // (undocumented)
  secrets?: Record<string, string>;
  // (undocumented)
  templateRef: string;
  // (undocumented)
  values: Record<string, JsonValue>;
}

// Warning: (ae-missing-release-tag) "ScaffolderScaffoldResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ScaffolderScaffoldResponse {
  // (undocumented)
  taskId: string;
}

// Warning: (ae-missing-release-tag) "ScaffolderStreamLogsOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface ScaffolderStreamLogsOptions {
  // (undocumented)
  after?: number;
  // (undocumented)
  taskId: string;
}

// Warning: (ae-missing-release-tag) "ScaffolderTask" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ScaffolderTask = {
  id: string;
  spec: TaskSpec;
  status: 'failed' | 'completed' | 'processing' | 'open' | 'cancelled';
  lastHeartbeatAt: string;
  createdAt: string;
};

// Warning: (ae-missing-release-tag) "ScaffolderTaskOutput" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ScaffolderTaskOutput = {
  entityRef?: string;
  remoteUrl?: string;
  links?: ScaffolderOutputLink[];
} & {
  [key: string]: unknown;
};

// Warning: (ae-missing-release-tag) "ScaffolderTaskStatus" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ScaffolderTaskStatus =
  | 'open'
  | 'processing'
  | 'failed'
  | 'completed'
  | 'skipped';

// @public
export interface ScaffolderUseTemplateSecrets {
  // @deprecated (undocumented)
  setSecret: (input: Record<string, string>) => void;
  // (undocumented)
  setSecrets: (input: Record<string, string>) => void;
}

// @public
export const TaskPage: ({ loadingText }: TaskPageProps) => JSX.Element;

// @public
export type TaskPageProps = {
  loadingText?: string;
};

// Warning: (ae-missing-release-tag) "TemplateList" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public @deprecated (undocumented)
export const TemplateList: ({
  TemplateCardComponent,
  group,
}: TemplateListProps) => JSX.Element | null;

// Warning: (ae-missing-release-tag) "TemplateListProps" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public @deprecated (undocumented)
export type TemplateListProps = {
  TemplateCardComponent?:
    | ComponentType<{
        template: TemplateEntityV1beta2;
      }>
    | undefined;
  group?: {
    title?: React_2.ReactNode;
    titleComponent?: React_2.ReactNode;
    filter: (entity: Entity) => boolean;
  };
};

// Warning: (ae-missing-release-tag) "TemplateParameterSchema" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type TemplateParameterSchema = {
  title: string;
  steps: Array<{
    title: string;
    schema: JsonObject;
  }>;
};

// Warning: (ae-missing-release-tag) "TemplateTypePicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const TemplateTypePicker: () => JSX.Element | null;

// @public
export const useTemplateSecrets: () => ScaffolderUseTemplateSecrets;

// Warnings were encountered during analysis:
//
// src/types.d.ts:32:5 - (ae-forgotten-export) The symbol "ScaffolderOutputLink" needs to be exported by the entry point index.d.ts
```