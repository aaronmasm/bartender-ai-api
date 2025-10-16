import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";
import { AiSlice, createAISlice } from "./aiSlice";

export const useAppStore = create<
  RecipeSliceType & FavoritesSliceType & NotificationSliceType & AiSlice
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  })),
);
