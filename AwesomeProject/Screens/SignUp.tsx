import React, { useState } from 'react'
import { View, Text, Image, ToastAndroid } from 'react-native';
import SMInput from '../Config/Components/SMInput';
import SMButton from '../Config/Components/SMButton';
import styles from '../styles';
import { Post } from '../Config/Navigation/apibasemethods';
import { Formik } from 'formik';
import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter valid email').required('Email Address is required'),
  password: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required("Password is required"),
  contact: yup.number().min(11).required('Contact is required')
});

function SignUp({ navigation }: any) {
  // const [signupInfo, setSignupInfo] = useState({});
  const getSignupHandler = (e: any) => {
    const signupInfo ={
      firstName: e.firstName,
      lastName: e.lastName,
      email : e.email,
      password: e.password,
      contact: e.contact
    }
    
    console.log(signupInfo);

    Post("/api/user/register", signupInfo)
      .then((res: any) => {
        console.log(res, "kkkkk")
        const showToastWithGravity = () => {
          ToastAndroid.showWithGravity(
            'Signup successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        };
        showToastWithGravity();
        navigation.navigate("Login")
      })
      .catch((err) => {
        console.log(err);
      })
  }
 
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', contact: '' }}
        validateOnMount={true}
        onSubmit={values => getSignupHandler(values)}
        validationSchema={signUpValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
          <View style={[styles.bgWhite, styles.p2, styles.h100]}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 130, height: 130, marginTop: 20 }} source={{ uri: "https://thumbs.dreamstime.com/b/assine-acima-o-bot%C3%A3o-azul-lustroso-etiqueta-redonda-33480642.jpg" }} />
            </View>
            <View style={styles.py1}>
              <SMInput icon='person' label='First Name' 
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              onChangeText={ handleChange('firstName') }  />
            </View>
            {(errors.firstName && touched.firstName) &&
              <Text style={styles.errors}>{errors.firstName}</Text>
            }

            <View style={styles.py1}>
              <SMInput icon='person' label='Last Name' 
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              onChangeText={ handleChange('lastName') }
               />
            </View>
            {(errors.lastName && touched.lastName) &&
              <Text style={styles.errors}>{errors.lastName}</Text>
            }

            <View style={styles.py1}>
              <SMInput icon='mail' label='Email' 
               onBlur={handleBlur('email')}
               value={values.email}
               onChangeText={handleChange('email')} />
            </View>
            {(errors.email && touched.email) &&
              <Text style={styles.errors}>{errors.email}</Text>
            }

            <View style={styles.py1}>
              <SMInput icon='lock' label='Password' val={true} 
               onBlur={handleBlur('password')}
               value={values.password}
               onChangeText={ handleChange('password') } />
            </View>
            {(errors.password && touched.password) &&
              <Text style={styles.errors}>{errors.password}</Text>
            }

            <View style={styles.py1}>
              <SMInput icon='book' label='contact' 
               onBlur={handleBlur('contact')}
               value={values.contact}
               onChangeText={ handleChange('contact') }
              />
            </View>
            {(errors.contact && touched.contact) &&
              <Text style={styles.errors}>{errors.contact}</Text>
            }

            <View style={styles.py2}>
              <SMButton label="Sign Up" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>

    </>
  )
}

export default SignUp;
