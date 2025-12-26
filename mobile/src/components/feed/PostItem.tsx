import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FeedPost } from '../../mocks/feedPosts';
import ReportModal from './ReportModal';
import { createFlag } from '../../services/flagApi';

interface PostItemProps {
  post: FeedPost;
  onRefresh?: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onRefresh }) => {
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);

  const handleReport = async (reason: string) => {
    try {
      const result = await createFlag(post.postId, reason);
      
      if (result.success) {
        if (onRefresh) {
          onRefresh();
        }
      } else {
        Alert.alert(
          'Error',
          result.error || 'Failed to submit report',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error reporting post:', error);
      Alert.alert(
        'Error',
        'Failed to submit report',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.postCard}>
      <View style={styles.header}>
        <Image source={{ uri: post.avatarUrl }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.fullName}>{post.fullName}</Text>
          <Text style={styles.role}>{post.role} - {post.city}</Text>
        </View>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => setIsReportModalVisible(true)}
        >
          <MaterialIcons name="flag" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <Text style={styles.message}>{post.message}</Text>

      <View style={styles.hashtagsContainer}>
        {post.hashtags.map((hashtag, index) => (
          <Text key={index} style={styles.hashtag}>
            #{hashtag}
          </Text>
        ))}
      </View>

      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}

      <ReportModal
        isVisible={isReportModalVisible}
        onClose={() => setIsReportModalVisible(false)}
        onReport={handleReport}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  menuButton: {
    padding: 4,
    marginLeft: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  city: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  hashtag: {
    fontSize: 14,
    color: '#2196F3',
    marginRight: 8,
    marginBottom: 4,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default PostItem;

