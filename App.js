import { View } from 'react-native';
import Home from './screens/Home';
import ItemListCategories from './screens/ItemListCategories';
import React, {useState, useCallback} from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  
  const [fontsLoaded] = useFonts({
    'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Italic': require('./assets/fonts/JosefinSans-Italic.ttf'),
    'JosefinSans-Light': require('./assets/fonts/JosefinSans-Light.ttf'),
    'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  

  

  const onHandleSelectCategory = (cat) => {
    setCategorySelected(cat)
  }

  console.log(categorySelected)

  return (
    <View onLayout={onLayoutRootView}>
      {
        categorySelected ?
       <ItemListCategories
        category={categorySelected}
        onSelectCategory={onHandleSelectCategory}
        />
      :
      <Home onSelectCategory={onHandleSelectCategory}/>
      }  
    </View>
  );
}

