import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ProductItem = ({item}) => {
  return (
    <Pressable onPress={()=>console.log({item})} style={styles.card}>
        <Text style={styles.text}>{item.title}</Text>
        <Image
            style={styles.image}
            reziseMode="cover"
            source={{uri:item.images[0]}}
        />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
    padding:10,
    paddingHorizontal:20,
    backgroundColor: colors.green3,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  text: {
    color: colors.green1,
  }
})