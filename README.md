
## Installation & Setup

### Mobile App
```bash
cd mobile
npm install
```

### Run
Or for a specific platform:
- `npm run ios` - for iOS
- `npm run android` - for Android

### Backend Server
```bash
cd backend
npm install
```

### Run
For development:
```bash
npm run dev
```

---

## Project Questions

### 1. What did you build in the time allowed?

I initialized a React Native application and an Express.js backend server, creating a basic architecture for both projects. I created a UI for the feed screen that renders PostItem components from mock data. I added the functionality to flag posts and connected it to the real API. I created working API routes for flagging posts and retrieving all flags, and added validation to prevent duplicate flags on the same post.

### 2. What would you build next with more time?

I would remove hardcoded posts from the mobile app and move them to the backend server so the client fetches posts from the API. I would also replace in-memory storage with a real database like PostgreSQL for persistent data storage. Additionally, I would add server-side filtering to filter posts by flagged/unflagged status, reducing unnecessary data transfer and client-side processing. I would also add user sessions to track user activity and their flagging behavior.

### 3. How would this feature connect to the rest of a real app?

This feature is highly relevant for any social media platform. Flagging inappropriate posts is mandatory part of any social network, as it helps maintain community standards and content quality.

### 4. What potential issues do you see with scaling or users?

The main issues include in-memory storage that doesn't persist data across server restarts and cannot scale horizontally across multiple instances. Without rate limiting, users could spam the flagging endpoint. The lack of pagination means the GET endpoint will become slow as the number of flags grows. Without authentication, there's no way to track or prevent abuse by individual users. Fetching all posts and flags on the client could cause performance issues with large datasets.

### 5. How would you monitor or track errors in production?

I would use Sentry for real-time error tracking and performance monitoring. If cloud services like AWS are used, I would also check logs there in case errors are not found in other places. Custom solutions can also be implemented for specific monitoring needs.

