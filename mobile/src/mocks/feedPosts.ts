export interface FeedPost {
  fullName: string;
  role: string;
  city: string;
  postId: number;
  message: string;
  hashtags: string[];
  avatarUrl: string;
  image?: string;
}

export const feedPosts: FeedPost[] = [
  {
    fullName: 'John Smith',
    role: 'Product manager',
    city: 'New York',
    postId: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    hashtags: ['marketing', 'management'],
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    fullName: 'Sarah Johnson',
    role: 'CEO',
    city: 'San Francisco',
    postId: 2,
    message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hashtags: ['management', 'selling'],
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    fullName: 'Michael Chen',
    role: 'Software developer',
    city: 'Seattle',
    postId: 3,
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    hashtags: ['development', 'marketing'],
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    fullName: 'Emily Davis',
    role: 'Product manager',
    city: 'Boston',
    postId: 4,
    message: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    hashtags: ['management', 'development'],
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
  },
  {
    fullName: 'David Wilson',
    role: 'Software developer',
    city: 'Austin',
    postId: 5,
    message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    hashtags: ['development', 'selling'],
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    image: 'https://picsum.photos/400/300?random=5',
  },
];

