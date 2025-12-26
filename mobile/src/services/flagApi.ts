import { Platform } from 'react-native';

export interface Flag {
  id: string;
  postId: number;
  reason: string;
  createdAt: string;
}

const API_BASE_URL = Platform.OS === 'android' 
  ? 'http://10.0.2.2:3000' 
  : 'http://localhost:3000';

export const getFlags = async (): Promise<Flag[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/flags`);
    const data = await response.json();
    
    if (data.success) {
      return data.flags;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching flags:', error);
    return [];
  }
};

export const createFlag = async (postId: number, reason: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/flags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId, reason }),
    });

    const data = await response.json();
    
    if (data.success) {
      return { success: true };
    }
    
    return { success: false, error: data.error || 'Failed to flag post' };
  } catch (error) {
    console.error('Error creating flag:', error);
    return { success: false, error: 'Network error' };
  }
};

