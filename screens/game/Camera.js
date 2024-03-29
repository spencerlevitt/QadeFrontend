import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        pic: null
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
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


                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    flexDirection: 'row',
                                }}>
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
                                    onPress={() => this.props.navigation.goBack()}
                                >
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
        const game = this.props.navigation.getParam('game');
        const isUserWon = this.props.navigation.getParam('isUserWon');
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: photoData });
        this.props.navigation.navigate('CameraPre', { game, isUserWon, photoData });
    };
}

CameraScreen.navigationOptions = {
    header: null,
};