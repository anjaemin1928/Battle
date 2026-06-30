import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      // Login & Profile
      "googleLogin": "Google 로그인",
      "createProfile": "프로필 생성",
      "createProfileDesc": "자신만의 닉네임을 조합해 보세요!",
      "randomTag": "#?????? (무작위 발급)",
      "randomize": "랜덤 뽑기",
      "confirm": "결정하기",
      
      // Settings
      "settings": "SETTINGS",
      "sound": "SOUND",
      "master": "MASTER",
      "bgm": "BGM",
      "sfx": "SFX",
      "display": "DISPLAY",
      "language": "언어",
      "account": "ACCOUNT",
      "version": "버전",
      "logout": "LOGOUT",
      "logoutAlert": "로그아웃 되었습니다.",
      
      // Matchmaking & Game
      "findMatch": "매칭 시작",
      "searching": "상대를 찾는 중...",
      "cancel": "취소",
      "canceling": "취소 중...",
      "enemyDetected": "적 발견!",
      "preparingArena": "전투 구역 준비 중...",
      "battleStart": "전투 시작!",
      "battleArena": "배틀 아레나 (임시)"
    }
  },
  en: {
    translation: {
      // Login & Profile
      "googleLogin": "Google Login",
      "createProfile": "Create Profile",
      "createProfileDesc": "Combine words to create your unique nickname!",
      "randomTag": "#?????? (Randomly Assigned)",
      "randomize": "Randomize",
      "confirm": "Confirm",
      
      // Settings
      "settings": "SETTINGS",
      "sound": "SOUND",
      "master": "MASTER",
      "bgm": "BGM",
      "sfx": "SFX",
      "display": "DISPLAY",
      "language": "Language",
      "account": "ACCOUNT",
      "version": "Version",
      "logout": "LOGOUT",
      "logoutAlert": "You have been logged out.",
      
      // Matchmaking & Game
      "findMatch": "FIND MATCH",
      "searching": "SEARCHING FOR OPPONENTS...",
      "cancel": "CANCEL",
      "canceling": "CANCELING...",
      "enemyDetected": "ENEMY DETECTED!",
      "preparingArena": "PREPARING BATTLE ARENA...",
      "battleStart": "BATTLE START!",
      "battleArena": "BATTLE ARENA (Placeholder)"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // 기본 언어
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
