import React from 'react';
import { useFonts } from 'expo-font';

import Navigator from './src/navigation/DitonNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MealReducer from './src/store/reducers/MealReducer';
import userReducer from './src/store/reducers/UserReducer';
import notReducer from './src/store/reducers/notificaionsReducer';

const rootReducer = combineReducers({
  meals: MealReducer,
  user: userReducer,
  notRed: notReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
    'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
    HelveticaNeue: require('./assets/fonts/HelveticaNeue.ttf'),
    'Hacen-Liner-XXL': require('./assets/fonts/Hacen-Liner-XXL.ttf'),
    GE_SS_Two_Medium: require('./assets/fonts/GE_SS_Two_Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
