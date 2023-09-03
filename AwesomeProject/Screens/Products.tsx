import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import SMIcon from '../Config/Components/SMIcon';

export default function Products( {navigation}: any ) {
   
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false)
    const getProducts = () => {
        setLoader(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
           setList(res.data)
           console.log(res.data); 
           setLoader(false)
           console.log(list)
        })
        .catch((err)=>{
            console.log(err.message)
            setLoader(false)
        })
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <SMIcon name='person' />
                </TouchableOpacity>
            ),
        });
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            getProducts();
            // Do something
        });

        return unsubscribe;
    },[navigation])

    return<>
    <View>
        <ImageBackground style={styles.p2} source={{uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm441-e03a_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8eeecd363a1ec633ffcb93ee0f4275d'}}>
            <Text style={[styles.fs1, styles.textWhite]}>Products</Text>
        </ImageBackground>
        <ScrollView>
            {loader && <ActivityIndicator size={30} color={"#0000FF"} />}
            {!loader &&
            <View style={[styles.flexRow,styles.flexWrap]}>
                {list && list.map((x: any,i: number) => {
                   return(
                    <View key={i} style={[styles.w50, styles.my1]} >
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',x) }
                        style={{backgroundColor: "#386641", padding: 10, marginHorizontal: 5 }}>
                           <Text numberOfLines={2} style={[styles.textWhite, styles.p1,]} >{x.title}</Text>
                           <Image resizeMode="contain" style={{width:100, height:100}} source={{uri: x.image}} />
                           <Text  style={[styles.textWhite, styles.p1,]} >{x.category}</Text>
                           <Text  style={[styles.textWhite, styles.p1,]} >{x.price}</Text>
                        </TouchableOpacity>
                    </View>
                 )
                })}
                </View>
                 } 
        </ScrollView>
    </View>
    </>
}