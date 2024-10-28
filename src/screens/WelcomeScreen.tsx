
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useRef, useState } from 'react';
import { Text,Image, View, FlatList,StyleSheet ,useWindowDimensions, Animated,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigators/BottomTabs';

const data = [
  { key: '1', text: 'Welcome to the app!',img:require('../images/Doggy.png') },
  { key: '2', text: 'Register in the app!',img:require('../images/Sing-up.png') },
  { key: '3', text: 'Find and search our best match!!',img:require('../images/post.png') },
  { key: '4', text: 'Adopt a pet today!',img:require('../images/Favorite-post.png') },
  { key: '5', text: 'Find your perfect companion.',img:require('../images/Completed.png') },
];


export const WelcomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: currentIndex === index ? 'blue' : 'gray' }
            ]}
          />
        ))}
      </View>
    );
  };


  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver:false, 
          }
        )}

        renderItem={({ item }) => (
          <View style={[styles.page,{width,height}]}>
            <Image 
              source={item.img}
              style= {styles.image}
            />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
     
       {currentIndex === data.length - 1 ? (
        <Animated.View style={[styles.continueButton, { opacity: scrollX }]}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} >
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
        </Animated.View>
      ): renderIndicators() }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin:20,
    fontSize: 24,
    fontWeight: 'bold',
  },image: {
    flex: 0.4,
    justifyContent: 'center',
    resizeMode: 'contain'
  }
  ,
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  indicator: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  }, 
  continueButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
