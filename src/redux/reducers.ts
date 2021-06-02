import { combineReducers } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

interface userCategories {
  categories: string[];
}

const userCategoriesInit = {
  categories: [],
};

const userCategories = (
  state: userCategories = userCategoriesInit,
  action: PayloadAction<string>
): userCategories => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    default:
      return state;
  }
};

interface currentUser {
  user: string;
}

const currentUserInit = {
  user: '',
};

const currentUser = (
  state: currentUser = currentUserInit,
  action: PayloadAction<string>
): currentUser => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  userCategories,
  currentUser,
});

export default reducers;
