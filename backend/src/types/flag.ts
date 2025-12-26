export interface Flag {
  id: string;
  postId: number; 
  reason: string; 
  createdAt: Date;
}

export interface CreateFlagRequest {
  postId: number;
  reason: string;
}

export interface FlagResponse {
  id: string;
  postId: number;
  reason: string;
  createdAt: string;
}

