import { View } from 'react-native';
import Home from './screens/Home';
import ItemListCategories from './screens/ItemListCategories';
import React, {useState} from 'react';

export default function App() {
  //const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState("")
  /* if (!fontsLoaded) {
    return null;
  } */
  

  const onHandleSelectCategory = (cat) => {
    setCategorySelected(cat)
  }

  console.log(categorySelected)

  return (
    <View>
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

