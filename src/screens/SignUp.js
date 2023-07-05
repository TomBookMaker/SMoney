import { View, Text, Image, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font'
import { ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function SignUp({navigation}) {
    const [pwdHidden, setpasswordHidden] = useState(true);
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
        <KeyboardAvoidingView style={{ flex: 1, paddingTop: 40,backgroundColor:'white' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled={false}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }} >
                <View style={{ height: '5%', width: '100%', marginTop: 8, marginBottom: 8 }}>
                    <TouchableOpacity style={{ height: '100%', width: '7%', marginLeft: 8 }}
                    onPress={()=>{
                        navigation.popToTop();
                    }}
                    >
                        <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={require('../asset/images/BackBtn.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: '10%', width: windowWidth - 100, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 500 }}>Đăng ký</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: '5%', width: (windowWidth - 60), borderWidth: 1.7, flexDirection: 'row', borderColor: '#318BD0', alignItems: 'center'
                        , borderRadius: 5, marginTop: 8, marginBottom: 8

                    }}>
                    <Image

                        source={require('../asset/images/FbLogo.png')}
                        style={{ resizeMode: 'contain', height: '50%', width: '10%', marginLeft: 20, marginRight: 20 }}
                    />

                    <Text style={{ fontWeight: '600', fontSize: 16, marginLeft: 20, color: '#2AA5D5' }}>KẾT NỐI VỚI FACEBOOK </Text>
                </TouchableOpacity>
                {/* Google */}
                <TouchableOpacity
                    style={{
                        height: '5%', width: (windowWidth - 60), borderWidth: 1.7, flexDirection: 'row', borderColor: '#F26060', alignItems: 'center'
                        , borderRadius: 5, marginTop: 16, marginBottom: 16

                    }}>
                    <Image

                        source={require('../asset/images/GgLogo.png')}
                        style={{ resizeMode: 'contain', height: '78%', width: '10%', marginLeft: 20, marginRight: 20 }}
                    />

                    <Text style={{ fontWeight: '600', fontSize: 16, marginLeft: 20, color: '#F25A5A' }}>KẾT NỐI VỚI GOOGLE </Text>
                </TouchableOpacity>
                {/* Apple */}
                <TouchableOpacity
                    style={{
                        height: '5%', width: (windowWidth - 60), borderWidth: 1.7, flexDirection: 'row', borderColor: '#6F6F6F', alignItems: 'center'
                        , borderRadius: 5, marginTop: 16, marginBottom: 16

                    }}>
                    <Image

                        source={require('../asset/images/AppleLogo.png')}
                        style={{ resizeMode: 'contain', height: '60%', width: '10%', marginLeft: 20, marginRight: 20 }}
                    />

                    <Text style={{ fontWeight: '600', fontSize: 16, marginLeft: 20, color: '#404040' }}> ĐĂNG NHẬP VỚI APPLE </Text>
                </TouchableOpacity>

                <View
                    style={{
                        height: '10%', width: (windowWidth - 60), alignItems: 'center', justifyContent: 'center'
                        , borderRadius: 5, marginTop: 16, marginBottom: 16

                    }}>
                    <Text style={{ fontWeight: '500', fontSize: 14, color: 'gray' }}>Chúng tôi sẽ không đăng thông tin mà không có sự cho</Text>

                    <Text style={{ fontWeight: '500', fontSize: 14, color: 'gray' }}>phép của bạn</Text>
                </View>
                <View style={{ height: '1%', width: (windowWidth - 150), borderBottomWidth: 2, borderBottomColor: 'gray' }}>
                </View>
                <View style={{ height: 45, width: windowWidth - 70, backgroundColor: 'white', marginTop: 20, marginBottom: 20, borderBottomColor: '#2EB84C', borderBottomWidth: 2 }}>
                    <TextInput

                        style={{ width: '100%', height: '100%', fontSize: 18, marginLeft: 20 }}
                        placeholder='Email'
                        autoCapitalize='none'
                    >

                    </TextInput>
                </View>
                <View style={{
                    height: 45, width: windowWidth - 70, backgroundColor: 'white', marginTop: 20,
                    borderBottomColor: '#2EB84C', borderBottomWidth: 2, alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TextInput

                        style={{ width: '100%', height: '100%', fontSize: 18, marginLeft: 20, flex: 1 }}
                        placeholder='Password'
                        autoCapitalize='none'
                        secureTextEntry={pwdHidden ? true : false}
                    >
                    </TextInput>
                    <TouchableOpacity style={{
                        height: '100%', aspectRatio: 1,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                        onPress={() => setpasswordHidden(!pwdHidden)}
                    >
                        <Image source={require('../asset/images/Hidden.png')} resizeMode='stretch' style={{ width: 25, height: 18 }}>

                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '20%', width: '100%',  alignItems: 'center' }}>
                <TouchableOpacity style={{
                            height: '32%', width: (windowWidth - 200), backgroundColor: '#2EB84C'
                            , marginTop: 20, borderRadius: 10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight:500, color: '#FFF' }}>ĐĂNG KÝ</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                            height: '32%', width: (windowWidth - 60), backgroundColor: '#FFF'
                            , marginTop: 20, borderRadius: 10,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={()=>{
                            navigation.navigate('Login');
                        }}
                        >
                    <View>
                        <Text style={{ fontSize: 15, fontWeight:500, color: '#2EB84C' }}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}