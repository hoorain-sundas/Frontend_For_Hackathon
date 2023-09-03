import React, { useState } from 'react'
import { Image, View, Text, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import SMInput from '../Config/Components/SMInput';
import styles from '../styles';
import SMButton from '../Config/Components/SMButton';
import { Post } from '../Config/Navigation/apibasemethods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email Address is required'),
  password: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required("Password is required"),
});

function Login({ navigation }: any) {
  // const [loginInfo, setLoginInfo] = useState({});
  const [loader, setLoader] = useState(false)

  const getLoginHandler = (e: any) => {
    setLoader(true)
    const loginInfo = {
      email: e.email,
      password: e.password
    }

    const storeData = async (value: any) => {
      try {
        await AsyncStorage.setItem('my-key', value);
      } catch (e) {
        // saving error
      }
    };
    Post("/api/user/login", loginInfo)
      .then((res: any) => {
        console.log(res);
        // console.log(res.data.data.token);
        let tokenValue = res.data.data.token;
        storeData(tokenValue)
        setLoader(false)
        const showToastWithGravity = () => {
          ToastAndroid.showWithGravity(
            'Login Successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        };
        showToastWithGravity();
        navigation.navigate("Home")
      })
      .catch((err: any) => {
        console.log(err);
        setLoader(false)
      })
  }

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validateOnMount={true}
        onSubmit={values => getLoginHandler(values)}
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
          <View style={[styles.bgWhite, styles.p2, styles.h100]}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 120, height: 120, marginTop: 30 }}
                source={{ uri: "https://previews.123rf.com/images/dirkercken/dirkercken1403/dirkercken140301620/26969365-login-icon-or-user-or-member-log-in-button-website-banner.jpg" }} />
            </View>
            <View style={styles.py2}>
              <SMInput icon='mail' label='Email'
                onBlur={handleBlur('email')}
                value={values.email}
                onChangeText={handleChange('email')} />
            </View>
            {(errors.email && touched.email) &&
              <Text style={styles.errors}>{errors.email}</Text>
            }

            <View style={styles.py2}>
              <SMInput icon='lock' label='Password' val={true}
                onBlur={handleBlur('password')}
                value={values.password}
                onChangeText={handleChange('password')} />
            </View>
            {(errors.password && touched.password) &&
              <Text style={styles.errors}>{errors.password}</Text>
            }
            {loader && <ActivityIndicator size={30} color={"#0000FF"} />}
            {!loader &&
              <View style={styles.py2}>
                <SMButton label="Login" onPress={handleSubmit} disabled={!isValid} />
              </View>
            }
            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
              <Text> If you don't have an account! Please </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: "blue", fontSize: 15 }}> SignUp </Text>
              </TouchableOpacity>
            </View>


          </View>
        )}
      </Formik>
    </>
  )
}

export default Login;
