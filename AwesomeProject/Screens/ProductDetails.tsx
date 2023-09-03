import React from 'react'
import {View, Text, Image} from 'react-native';
import styles from '../styles';

function ProductDetails({ navigation, route }: any) {
    let obj = route.params
    console.log(obj,"ll")
  return (
    <>
      <View style={styles.p2}>
            <Text style={styles.fs2}>{obj.title}</Text>
            <Image resizeMode="contain" style={{ width: 200, height: 200 }} source={{ uri: obj.image }} />
        </View>
    </>
  )
}

export default ProductDetails;
