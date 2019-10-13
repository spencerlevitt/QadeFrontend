import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        pic: null,
    };

    async componentDidMount() {
        this.getPermissionAsync();
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
    
      _pickImage = async () => {
        const photoData =await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
          });
        this.setState({ capturing: false, captures: photoData })
        this.props.navigation.navigate('CameraPre', { photoData })
    }    

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            cameraRef = React.createRef();
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={camera => this.camera = camera}>
                        <View style={{ flex: 1 }}>


                            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', }}>

                            <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        alignSelf: 'flex-start',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        marginTop: 20,
                                        paddingTop: Constants.statusBarHeight,
                                        padding: 20
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            type:
                                                this.state.type === Camera.Constants.Type.back
                                                    ? Camera.Constants.Type.front
                                                    : Camera.Constants.Type.back,
                                        });
                                    }}>
                                    <EvilIcons name={'camera'} size={70} color={'#eee'} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        alignSelf: 'flex-start',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 20,
                                        paddingTop: Constants.statusBarHeight,
                                        padding: 20
                                    }}
                                    onPress={this._pickImage}>
                                    <FontAwesome name={'picture-o'} size={70} color={'#eee'} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        alignSelf: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',
                                        marginTop: 20,
                                        paddingTop: Constants.statusBarHeight,
                                        padding: 20
                                    }}
                                    onPress={() => this.props.navigation.goBack()}>
                                    <EvilIcons name={'close-o'} size={70} color={'#eee'} />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        alignSelf: 'center',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        padding: 20
                                    }}
                                    onPress={() => this.handleShortCapture()}>

                                    <View style={{ borderRadius: 70, height: 70, width: 70, borderWidth: 2, borderColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ borderRadius: 50, height: 50, width: 50, backgroundColor: '#3A8FFF' }}>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Image source={{ uri: this.state.photoData }} />

                        </View>

                    </Camera>
                </View>
            );
        }
    }

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: photoData })
        this.props.navigation.navigate('CameraPre', { photoData })
    };
}

CameraScreen.navigationOptions = {
    header: null,
};