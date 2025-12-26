import { Router, Request, Response } from 'express';
import { flagService } from '../services/flagService';
import { CreateFlagRequest } from '../types/flag';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  try {
    const { postId, reason } = req.body;

    const request: CreateFlagRequest = {
      postId: Number(postId),
      reason: reason
    };

    const result = flagService.createFlag(request);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: result.error
      });
    }

    return res.status(201).json({
      success: true,
      flag: result.flag
    });
  } catch (error) {
    console.error('Error creating flag:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

router.get('/', (req: Request, res: Response) => {
  try {
    const flags = flagService.getAllFlags();
    return res.json({
      success: true,
      flags: flags
    });
  } catch (error) {
    console.error('Error getting flags:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

export default router;

