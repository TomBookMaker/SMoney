import { View, Text, Image, Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const applicationId = Constants.manifest.android.package;
const windowHeight = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
export default function Firstpage({navigation}) {
    const [fontsLoaded] = useFonts({
        'StickNoBills-Medium': require('../asset/fonts/StickNoBills-Medium.ttf'),
        'Lora': require('../asset/fonts/Lora-Medium.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (

        

        <View style={{ flex: 1, height: '100%', width: '100%', paddingTop: 50, backgroundColor:'white' }}>
            
            <View style={{ height: '10%', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../asset/images/logo.png')}

                        style={{ resizeMode: 'stretch', height: '60%', width: '45%', borderRadius: 5 }}>

                    </Image>
                </View>

                <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                    <Text

                        style={{ color: '#2EB84C', fontSize: 45, fontFamily: 'StickNoBills-Medium' }}>
                        $Money
                    </Text>
                </View>
            </View>

            <View style={{ height: '70%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: '40%', width: '90%' }}>
                    <Image source={require('../asset/images/Slide1.png')}>

                    </Image>

                </View>

                <Text style={{ fontSize: 25, fontWeight: 600, marginTop: 30, fontFamily: 'Lora' }}>Quản lý tài chính hiệu quả với</Text>
                <Text style={{ fontSize: 25, fontWeight: 600, marginTop: 10, fontFamily: 'Lora' }}>Smoney</Text>

                <View style={{ borderBottomWidth: 3, height: "20%", width: (windowWidth - 200), borderBottomColor: '#DBDBDB' }}>

                </View>
            </View>

            <View style={{ height: '20%', width: '100%',  alignItems: 'center' }}>
                <TouchableOpacity style={{
                            height: '32%', width: (windowWidth - 60), backgroundColor: '#2EB84C'
                            , marginTop: 20, borderRadius: 100,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={()=>{
                            navigation.navigate('SignUp');
                        }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight:500, color: '#FFF' }}>ĐĂNG KÝ MIỄN PHÍ</Text>
                    </View>


                </TouchableOpacity>

                <TouchableOpacity style={{
                            height: '32%', width: (windowWidth - 60), backgroundColor: '#FFF'
                            , marginTop: 20, borderRadius: 100,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={()=>{
                            navigation.navigate('Login');
                        }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight:500, color: '#2EB84C' }}>ĐĂNG NHẬP</Text>
                    </View>

                    
                </TouchableOpacity>
            </View>

        </View>


    )
}