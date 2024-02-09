import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const PostDetail = ({ route }) => {
  const { post } = route.params;
  const [blogDetail, setBlog] = useState(null);

  useEffect(() => {
    setBlog(post);
  }, []);

  return (
    <View>
      {blogDetail && (
        <Text style={{ fontSize: 15 }}>Name: {blogDetail.name}</Text>
      )}
    </View>
  );
};

export default PostDetail;
