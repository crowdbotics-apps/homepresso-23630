import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList189543Navigator from '../features/ArticleList189543/navigator';
import ArticleList189542Navigator from '../features/ArticleList189542/navigator';
import ArticleList189541Navigator from '../features/ArticleList189541/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList189543: { screen: ArticleList189543Navigator },
ArticleList189542: { screen: ArticleList189542Navigator },
ArticleList189541: { screen: ArticleList189541Navigator },

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
