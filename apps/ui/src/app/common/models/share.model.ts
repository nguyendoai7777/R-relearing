import { PathRouteProps } from 'react-router/dist/lib/components';

export interface Routes extends PathRouteProps {
  key: string;
  name: string;
}
