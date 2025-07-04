/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

type BooksProps = {
  title: string | null;
  authors: { name: string }[];
}

const Books: React.FC<BooksProps> = ({ title,authors }) => {
  return (
      <View style={{ marginVertical: 5, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 }}>
      <Text style={{ fontSize: 16, color: 'black' }}>{title}</Text>
      <Text style={{ fontSize: 14, color: 'gray' }}>{authors.map((a) => a.name).join(', ')}</Text>
      </View>
  );
};

export default Books;