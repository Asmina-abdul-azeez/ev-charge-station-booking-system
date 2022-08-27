import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {post1, post2, post3} from '../../../assets/appImages';

const Posts = () => (
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
    {[post1, post2, post3].map(story => (
      <View style={{width: '100%', borderBottomWidth: 3, borderBottomColor: '#EEEEEE', paddingVertical: 10}}>
        <Image source={story} style={{width: '100%', aspectRatio: 376 / 378, borderWidth: 1, height: undefined}} resizeMethod="resize" resizeMode="contain" />
      </View>
    ))}
  </ScrollView>
);

export default Posts;
