import { configureStore } from '@reduxjs/toolkit'
import participantsReducer from './dataSlice'
export default configureStore({
    reducer: {
        homeData: participantsReducer
    },
})