import { StyleSheet, Button, View,FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import ProductItem from "../components/ProductItem"
import Search from '../components/Search'
import allProducts from '../data/products.json'


const ItemListCategories = ({category, onSelectCategory}) => {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  //console.log(category)

  useEffect(()=>{
    if(category){
      const productsByCategory = allProducts.filter(product=>product.category===category)
      const productsByCategoryAndBySearch = productsByCategory.filter(product=>product.title.includes(keyword))
      setProducts(productsByCategoryAndBySearch)
    }else{
      const allProductsBySearch = allProducts.filter(product=>product.title.includes(keyword))
      setProducts(allProductsBySearch)
    }
  },[category,keyword])
  
  return (
    <>     
      <Header title="Products"  />
      <Button title="Go back" onPress={()=>onSelectCategory(null)} />
      <Search onSearch={setKeyword} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item})=> <ProductItem item={item}/>}
          keyExtractor={item=>item.id}
        />
      </View>
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})