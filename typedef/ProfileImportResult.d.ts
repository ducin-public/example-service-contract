// Auto-generated with `raml-to-typescript`/`json-schema-to-typescript`

export interface ProfileImportResult {
  successCount: number;
  skippedCount: number;
  errors: {
    loginName: string;
    email: string;
    invalidFields: string[];
    recordJson: string;
  }[];
}
