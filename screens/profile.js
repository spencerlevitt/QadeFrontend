import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';

console.disableYellowBox = true

const SecondRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

    <View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>

      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name={'download'} size={15} color={'#74c3ff'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
            </View>
          </View>
        </View>
      </View>


    </View>

  </ScrollView>
);
const FirstRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

    <View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.17 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.28, flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                <EvilIcons name={'close-o'} size={35} color={'#e6685f'} />
              </TouchableOpacity>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>


      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>



      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>




      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>



      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>



      <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 0.3 }}>
            <Text style={[styles.cardText, { fontSize: RFPercentage(2) }]}>Chris Wright</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#888' }}>10-5</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                  <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
          </View>

          <View style={{ flex: 0.25, alignItems: 'flex-end', paddingRight: 20 }}>
          </View>
        </View>
      </View>


    </View>

  </ScrollView>
);

export default class ProfileScreen extends React.Component {



  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pending' },
      { key: 'second', title: "Accepted" },
    ],
  };

  _handleIndexChange = index => this.setState({ index });


  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBarCenter}>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const color = Animated.color(
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 82 : 238
                  ),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 141 : 238
                  ),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 247 : 238
                  ),
                })
              ),
            );
            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}>
                <Animated.View style={[styles.realTabItem, { borderBottomWidth: 2, borderBottomColor: color }]}>
                  <Animated.Text style={{ color: '#333', fontSize: 20 }}>{route.title}</Animated.Text>
                </Animated.View>

              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };



  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  realTabItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
