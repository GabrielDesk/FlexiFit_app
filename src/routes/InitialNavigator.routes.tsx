import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainRoutes } from './main.routes';
// import { AuthRoutes } from './auth.routes';
// import { DrawerRoutes } from './drawer.routes';

const Stack = createStackNavigator();

export const InitialNavigator = () => {
  //   if (loginState.userToken !== null && loginState.userToken !== undefined) {
  return (
    <Stack.Screen
      name="HomeScreen"
      options={{
        headerShown: false,
      }}
      component={MainRoutes}
    />
  );
};

//   return (
//     <Stack.Screen
//       name="Login"
//       options={{
//         headerShown: false,
//         animationTypeForReplace: loginState.isSignout ? 'pop' : 'push',
//         animationEnabled: false,
//       }}
//     >
//       {(props) => <AuthRoutes {...props} firstOpen={firstOpen} />}
//     </Stack.Screen>
//   );
// };
