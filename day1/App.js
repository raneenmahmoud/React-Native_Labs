import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
   
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
      {/* <View style={{height:600 }}>
     <Image source={require('./assets/icon.png')}></Image>
      </View> */}
      {/* <View style={{height:600 }}>
     <Image style={{width:300,height:600}}  source={require('./assets/Images/pict 2.jpg')}></Image>
      </View> */}

    <View style={{width:320}}>
     <Image style={{width:300,height:600}} source={{uri:"https://images.unsplash.com/photo-1685115910523-2516c451101b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=407&q=80",
    }}></Image>
      </View>

      <View style={{width:320}}>
     <Image style={{width:300,height:600}} source={{uri:"https://images.unsplash.com/photo-1685115910523-2516c451101b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=407&q=80",
    }}></Image>
      </View>

      <View style={{width:320}}>
     <Image style={{width:300,height:600}} source={{uri:"https://images.unsplash.com/photo-1685115910523-2516c451101b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=407&q=80",
    }}></Image>
      </View>
    </ScrollView>
   
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

