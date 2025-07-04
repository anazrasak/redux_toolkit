/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  fetchProfileData1,
  postProfileData1,
  postProfileFormData,
} from '../redux/actions/profileActions';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfileData1());
  }, []);

  return (
    <View>
      <Text>Profile Data: {loading ? 'Loading...' : JSON.stringify(data)}</Text>
      <Button title="Post Data" onPress={() => dispatch(postProfileData1({ key: 'value' }))} />
      <Button
        title="Upload Form"
        onPress={() =>
          dispatch(
            postProfileFormData({
              field1: 'test',
              file: {
                uri: 'file://sample.jpg',
                type: 'image/jpeg',
                name: 'sample.jpg',
              },
            })
          )
        }
      />
    </View>
  );
};

export default ProfileScreen;
