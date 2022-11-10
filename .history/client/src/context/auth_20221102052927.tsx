import { User } from '../types';

interface State {
  authenticated: boolean;
  user: User | undefined;
}
