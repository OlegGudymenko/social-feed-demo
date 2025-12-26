import { Flag } from '../types/flag';

class FlagStore {
  private flags: Map<number, Flag> = new Map();

  hasFlag(postId: number): boolean {
    return this.flags.has(postId);
  }

  addFlag(flag: Flag): void {
    this.flags.set(flag.postId, flag);
  }

  getAllFlags(): Flag[] {
    return Array.from(this.flags.values());
  }

  getFlag(postId: number): Flag | undefined {
    return this.flags.get(postId);
  }
}

export const flagStore = new FlagStore();

