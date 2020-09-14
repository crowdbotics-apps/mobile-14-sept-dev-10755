import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310753Navigator from '../features/BlankScreen310753/navigator';
import BlankScreen210752Navigator from '../features/BlankScreen210752/navigator';
import BlankScreen010745Navigator from '../features/BlankScreen010745/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310753: { screen: BlankScreen310753Navigator },
BlankScreen210752: { screen: BlankScreen210752Navigator },
BlankScreen010745: { screen: BlankScreen010745Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
