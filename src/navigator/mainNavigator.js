import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310758Navigator from '../features/BlankScreen310758/navigator';
import BlankScreen210757Navigator from '../features/BlankScreen210757/navigator';
import BlankScreen110756Navigator from '../features/BlankScreen110756/navigator';
import BlankScreen010755Navigator from '../features/BlankScreen010755/navigator';
import BlankScreen310753Navigator from '../features/BlankScreen310753/navigator';
import BlankScreen210752Navigator from '../features/BlankScreen210752/navigator';
import BlankScreen010745Navigator from '../features/BlankScreen010745/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310758: { screen: BlankScreen310758Navigator },
BlankScreen210757: { screen: BlankScreen210757Navigator },
BlankScreen110756: { screen: BlankScreen110756Navigator },
BlankScreen010755: { screen: BlankScreen010755Navigator },
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
