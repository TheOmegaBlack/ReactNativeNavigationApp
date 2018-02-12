import { NavigationActions } from 'react-navigation';

export const navigate = routeName => NavigationActions.navigate({ routeName });

export const navigateWithParams = (routeName, params) =>
  NavigationActions.navigate({ routeName, params });

export const navigateNoBack = routeName => NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName }),
  ],
});
