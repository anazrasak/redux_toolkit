# 📱 React Native Redux Toolkit Boilerplate (with TypeScript)

A scalable React Native starter project using:

- 🧠 Redux Toolkit for state management
- 🧪 Redux Persist for offline state persistence
- 🔥 Axios for API requests
- 💡 TypeScript for type safety
- 📦 React Navigation for screen transitions

This boilerplate is set up for **fast development** and is ideal for team-based projects and production use.

---

## 🚀 Features

- 🔄 Integrated Redux Toolkit + Async Thunks (GET, POST, POSTForm)
- 📁 Modular folder structure with `redux/`, `screens/`, `api/`
- 🧬 Typed custom hooks for `useSelector` and `useDispatch`
- 🗂️ Redux Persist (AsyncStorage) for local state persistence
- 📚 Sample API usage (Gutenberg Books API)
- 🔍 FlatList rendering from Redux state
- ⚛️ Fully written in TypeScript

---

## 🗂️ Folder Structure

src/
├── api/
│ └── axiosInstance.ts
├── redux/
│ ├── store.ts
│ ├── rootReducer.ts
│ ├── slices/
│ │ ├── homeSlice.ts
│ │ └── profileSlice.ts
│ └── actions/
│ ├── homeActions.ts
│ └── profileActions.ts
├── types/
│ └── index.ts
├── screens/
│ ├── HomeScreen.tsx
│ └── ProfileScreen.tsx
├── hooks.ts
└── App.tsx

---

## 🧪 Sample API Used

- 📚 [Gutenberg Books API](https://gutendex.com/books)

Used to demonstrate fetching and rendering a collection with FlatList via Redux.

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/anazrasak/redux_toolkit
cd your-repo-name
2. Install dependencies

npm install
3. Run on Android or iOS

npx react-native run-android
# or
npx react-native run-ios
🧰 Libraries Used
Library	Purpose
@reduxjs/toolkit	State management
react-redux	Redux binding
redux-persist	Persist state in AsyncStorage
axios	HTTP client
react-navigation	Navigation system
react-native-safe-area-context	Safe area provider for layout
typescript	Static typing

```
