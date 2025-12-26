import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, RefreshControl, Text, View, Platform, StatusBar } from 'react-native';
import { useFeedStore } from '../store/useFeedStore';
import { feedPosts } from '../mocks/feedPosts';
import PostItem from '../components/feed/PostItem';
import { getFlags } from '../services/flagApi';

const Feed: React.FC = () => {
  const { setPosts, setFlaggedPostIds, getFilteredPosts } = useFeedStore();
  const [refreshing, setRefreshing] = useState(false);
  const filteredPosts = getFilteredPosts();

  const loadData = useCallback(async () => {
    try {
      setPosts(feedPosts);

      const flags = await getFlags();
      const flaggedIds = flags.map((flag) => flag.postId);
      setFlaggedPostIds(flaggedIds);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setRefreshing(false);
    }
  }, [setPosts, setFlaggedPostIds]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData();
  }, [loadData]);



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E3F2FD" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          filteredPosts.length === 0 && styles.emptyContainer
        ]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredPosts.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No post found</Text>
          </View>
        ) : (
          filteredPosts.map((post) => (
            <PostItem key={post.postId} post={post} onRefresh={onRefresh} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Feed;

