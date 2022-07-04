import { configureStore } from '@reduxjs/toolkit'
import {useDispatch, useSelector, createSelectorHook, TypedUseSelectorHook} from "react-redux";
import { usersSlice } from './Features/UserSlice';
// ...

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDistpatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;