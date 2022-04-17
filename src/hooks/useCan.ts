import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permissions => {
      return user.permissions.includes(permissions);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = permissions.some(roles => {
      return user.roles.includes(roles);
    });

    if (!hasAllRoles) {
      return false;
    }
  }
  return true;
}
