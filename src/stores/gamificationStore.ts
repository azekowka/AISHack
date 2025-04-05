import { create } from 'zustand';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  dateUnlocked?: Date;
}

interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  currentStreak: number;
  longestStreak: number;
  points: number;
  badges: Badge[];
  classRank: number;
  mountainProgress: number;
}

interface LeaderboardEntry {
  userId: string;
  name: string;
  avatar: string;
  points: number;
  streak: number;
  rank: number;
}

interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'avatar' | 'badge' | 'powerup';
  icon: string;
}

interface GamificationState {
  userProfile: UserProfile;
  leaderboard: LeaderboardEntry[];
  shopItems: ShopItem[];
  updateStreak: (increment: boolean) => void;
  unlockBadge: (badgeId: string) => void;
  updatePoints: (points: number) => void;
  purchaseItem: (itemId: string) => void;
  updateMountainProgress: (progress: number) => void;
}

const initialBadges: Badge[] = [
  {
    id: 'week_no_delays',
    name: 'Perfect Week',
    description: 'No delays for an entire week',
    icon: '🏆',
    unlocked: false,
  },
  {
    id: 'month_no_delays',
    name: 'Perfect Month',
    description: 'No delays for an entire month',
    icon: '🌟',
    unlocked: false,
  },
  {
    id: 'streak_7',
    name: '7-Day Streak',
    description: 'Maintain a streak for 7 days',
    icon: '🔥',
    unlocked: false,
  },
];

export const useGamificationStore = create<GamificationState>((set) => ({
  userProfile: {
    id: '1',
    name: 'Student',
    avatar: 'default',
    currentStreak: 0,
    longestStreak: 0,
    points: 0,
    badges: initialBadges,
    classRank: 0,
    mountainProgress: 0,
  },
  leaderboard: [],
  shopItems: [
    {
      id: 'avatar_1',
      name: 'Cool Avatar',
      description: 'A stylish avatar for your profile',
      cost: 100,
      type: 'avatar',
      icon: '👤',
    },
    {
      id: 'powerup_1',
      name: 'Time Warp',
      description: 'Get 5 minutes extra time',
      cost: 50,
      type: 'powerup',
      icon: '⏱️',
    },
  ],
  updateStreak: (increment) =>
    set((state) => {
      const newStreak = increment ? state.userProfile.currentStreak + 1 : 0;
      return {
        userProfile: {
          ...state.userProfile,
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.userProfile.longestStreak),
        },
      };
    }),
  unlockBadge: (badgeId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        badges: state.userProfile.badges.map((badge) =>
          badge.id === badgeId
            ? { ...badge, unlocked: true, dateUnlocked: new Date() }
            : badge
        ),
      },
    })),
  updatePoints: (points) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        points: state.userProfile.points + points,
      },
    })),
  purchaseItem: (itemId) =>
    set((state) => {
      const item = state.shopItems.find((i) => i.id === itemId);
      if (!item || state.userProfile.points < item.cost) return state;
      
      return {
        userProfile: {
          ...state.userProfile,
          points: state.userProfile.points - item.cost,
        },
      };
    }),
  updateMountainProgress: (progress) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        mountainProgress: Math.min(100, Math.max(0, progress)),
      },
    })),
})); 