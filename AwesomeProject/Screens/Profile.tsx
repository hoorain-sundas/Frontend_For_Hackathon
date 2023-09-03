import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SMIcon from '../Config/Components/SMIcon';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from '../styles';
import SMImagePicker from '../Config/Components/SMImagePicker';

function Profile({navigation}: any) {
    const [imgUri, setImgUri] = useState<any>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyUW4SBni8aG-yrhj471NhuedjBoklkLNXsBwQBo7tQ&s')
    const openCamera = async () =>{
        const result = await launchCamera({
         mediaType: 'photo',
         includeBase64: true, // image ko compress karta hai thora sa kbs men
        });
     //    console.log(result.assets[0].uri)
     setImgUri(result.assets[0].uri)
     console.log(result.assets[0].uri);

     // setImgUri('data:image/png;base64,' + result.assets[0].base64)
     }
     const openGallery = async () =>{
        const result = await launchImageLibrary({
            mediaType: 'photo'
        });
        setImgUri(result.assets[0].uri)
        console.log(result.assets[0].uri);
    }
  return (
    <>
    <View>
    <Text>Profile</Text>
            <View style={[styles.flexCenter, styles.flexRow]}>
                {/* <TouchableOpacity onPress={openCamera} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='photo-camera' />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGallery} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='image' />
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={[styles.p2, styles.m1, styles.bgWhite, styles.rounded]}>
                    <SMIcon size={35} name='location-on' />
                </TouchableOpacity> */}
                <SMImagePicker />

            </View>
            {/* <Image style={{ width: 200, height: 200 }} source={{ uri: imgUri }} /> */}
    </View>
      
    </>
  )
}

export default Profile;
