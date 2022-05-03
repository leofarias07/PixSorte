import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ValidateUserPermissions } from '../utils/validateUserPermissions';

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  const userHasValidPremissions = ValidateUserPermissions({
    user,
    permissions,
    roles
  });
  return userHasValidPremissions;
}
