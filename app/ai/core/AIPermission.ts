export enum AIPermissionType {
  Read = "read",
  Write = "write",
  Execute = "execute",
  Admin = "admin",
}

export interface AIPermission {
  id: string;

  name: string;

  type: AIPermissionType;

  description?: string;

  metadata?: Record<string, unknown>;
}

