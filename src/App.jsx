import React, { createContext } from "react";
import { Home } from "./Components/pages/home";
import { Login } from "./Components/pages/login";
import { Photo } from "./Components/pages/photo";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";

function reducer(state, action) {
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "add_user":
      return {
        ...state,
        user: {
          username: action.payload.username,
        },
      };

    case "add_photos_user":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };

    case "add_highlight_image":
      const currentImage = state.user.photos.find((img) => {
        return img.id === action.payload;
      });

      return {
        ...state,
        user: {
          ...state.user,
          highlightImage: currentImage,
        },
      };

    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: {
    username: "@adatech",
    photos: [],
    highlightImage: null,
  },
};

export const InstaContext = createContext(initialState);

function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <InstaContext.Provider
      value={{ meuState: globalState, meuDispatch: dispatch }}
    >
      {globalState.currentPage === "login" && <Login />}
      {globalState.currentPage === "home" && <Home />}
      {globalState.currentPage === "fullscreen" && <Photo />}
    </InstaContext.Provider>
  );
}

export default App;
