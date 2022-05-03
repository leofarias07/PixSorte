/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-shadow */
type User = {
  permissions: String[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function ValidateUserPermissions({
  user,
  permissions,
  roles
}: ValidateUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission =>
      user.permissions.includes(permission)
    );

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some(role => user.roles.includes(role));

    if (!hasAllRoles) {
      return false;
    }
  }
  return true;
}
