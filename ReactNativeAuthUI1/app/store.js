import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'
import studentReducer from '../features/studentSlice'
import schoolAdminReducer from '../features/schoolAdminSlice'
import teacherReducer from '../features/teacherSlice.js'


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    user: userReducer,
    auth: authReducer,
    student: studentReducer,
    schoolAdmin: schoolAdminReducer,
    teacher: teacherReducer
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})
setupListeners(store.dispatch)