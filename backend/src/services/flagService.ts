import { Flag, CreateFlagRequest, FlagResponse } from '../types/flag';
import { flagStore } from '../store/flagStore';
import { v4 as uuidv4 } from 'uuid';

export class FlagService {
  createFlag(request: CreateFlagRequest): { success: boolean; flag?: FlagResponse; error?: string } {
    if (flagStore.hasFlag(request.postId)) {
      return {
        success: false,
        error: 'This post has already been flagged'
      };
    }

    if (!request.postId || !request.reason) {
      return {
        success: false,
        error: 'Missing required fields: postId, reason'
      };
    }

    const flag: Flag = {
      id: uuidv4(),
      postId: request.postId,
      reason: request.reason,
      createdAt: new Date()
    };

    flagStore.addFlag(flag);

    return {
      success: true,
      flag: {
        id: flag.id,
        postId: flag.postId,
        reason: flag.reason,
        createdAt: flag.createdAt.toISOString()
      }
    };
  }

  getAllFlags(): FlagResponse[] {
    const flags = flagStore.getAllFlags();
    return flags.map(flag => ({
      id: flag.id,
      postId: flag.postId,
      reason: flag.reason,
      createdAt: flag.createdAt.toISOString()
    }));
  }
}

export const flagService = new FlagService();

