/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchHomeData1 } from '../redux/actions/homeActions';
import { FlatList } from 'react-native-gesture-handler';
import Books from '../components/Books';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(state => state.home);

  useEffect(() => {
    dispatch(fetchHomeData1());
  }, []);

  console.log(data,'DATA');

  type BookItem = {
    id:number;
    title: string;
    authors: { name: string }[];
  }

  const renderItem = ({ item }: { item: BookItem }) => (
   <Books title={item?.title} authors = {item.authors} />
  );


  

  return (
    <View style={{flex:1,padding:10}}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} /> : 
      <View>
      <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Books</Text>
      <FlatList
        data={data?.results || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ color: 'gray', textAlign: 'center' }}>No books found</Text>}
      />
    </View>
      }
      
    </View>
  );
};

export default Home;




  // <Text>Home Data: {loading ? 'Loading...' : JSON.stringify(data)}</Text>
  //     <Button title="Post Data" onPress={() => dispatch(postHomeData1({ message: 'Hello' }))} />
  //     <Button
  //       title="Upload Form"
  //       onPress={() =>
  //         dispatch(
  //           postHomeFormData({
  //             field1: 'value',
  //             file: {
  //               uri: 'file://example.jpg',
  //               type: 'image/jpeg',
  //               name: 'photo.jpg',
  //             },
  //           })
  //         )
  //       }
  //     />
