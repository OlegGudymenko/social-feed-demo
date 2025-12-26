import { create } from 'zustand';
import { FeedPost } from '../mocks/feedPosts';

interface FeedState {
  posts: FeedPost[];
  flaggedPostIds: number[];
  setPosts: (posts: FeedPost[]) => void;
  setFlaggedPostIds: (postIds: number[]) => void;
  getFilteredPosts: () => FeedPost[];
}

export const useFeedStore = create<FeedState>((set, get) => ({
  posts: [],
  flaggedPostIds: [],
  setPosts: (posts: FeedPost[]) => set({ posts }),
  setFlaggedPostIds: (postIds: number[]) => set({ flaggedPostIds: postIds }),
  getFilteredPosts: () => {
    const { posts, flaggedPostIds } = get();
    const flaggedSet = new Set(flaggedPostIds);
    return posts.filter((post) => !flaggedSet.has(post.postId));
  },
}));

