export enum AIRoleType {
  Guest = "guest",
  User = "user",
  Pro = "pro",
  Admin = "admin",
}

export interface AIRole {
  id: string;

  name: string;

  type: AIRoleType;

  permissions: string[];

  createdAt: Date;

  metadata?: Record<string, unknown>;
}

