// store/useUIStore.ts
import { create } from "zustand";

type UIState = {
  activePanel: null | "about" | "work" | "skills" | "timeline" | "contact";
  setActivePanel: (p: UIState["activePanel"]) => void;
  muted: boolean;
  toggleMuted: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  activePanel: null,
  setActivePanel: (p) => set({ activePanel: p }),
  muted: false,
  toggleMuted: () => set((s) => ({ muted: !s.muted }))
}));