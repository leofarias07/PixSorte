import { useCan } from '../hooks/useCan';

interface CanProps {
  permissions?: string[];
  roles?: string[];
}

export const Can: React.FC<CanProps> = ({
  children,
  permissions,
  roles
}): JSX.Element => {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return <>{children}</>;
};
