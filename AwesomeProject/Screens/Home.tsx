import React, { useState } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import SMIcon from '../Config/Components/SMIcon';
import SMDatePicker from '../Config/Components/SMDatePicker';
const { height, width } = Dimensions.get('window')
function Home() {
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SMDatePicker />
        <View style={{ height: height / 2 }}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={e => {
              const x:any = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity disabled={true}
                    style={{
                      width: '90%',
                      height: '90%',
                      backgroundColor: 'green',
                      borderRadius: 10
                    }}>

                  </TouchableOpacity>
                </View>
              )
            }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {
            data.map((item, index) => {
              return (
                <View style={{ width: 8, 
                  height: 8, 
                  borderRadius: 4, 
                  backgroundColor: currentIndex==index ? 'green' : 'gray', 
                  marginLeft: 5 }}>
                  </View>
              )
            })
          }
        </View>
        {/* <Text>  <SMIcon name='home' color="blue" size={30} /> Home </Text>
         <SMIcon name='location-on' color="blue" size={30} />
         <SMIcon name='person' color="blue" size={30} /> */}
      </View>
    </>
  )
}

export default Home
