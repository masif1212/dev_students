import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.18.12:8000/api/user/'
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    registerSchoolAdmin: builder.mutation({
      query: (schooladmin) => {
        return {
          url: 'schooladmin',
          method: 'POST',
          body: schooladmin,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    registerStudent : builder.mutation({
      query: (student) => {
        return {
          url: 'createstudent',
          method: 'POST',
          body: student,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (token) => ({
        url: 'loggeduser',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },
      })
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'send-reset-password-email',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    changeUserPassword: builder.mutation({
      query: ({ formdata, userLToken }) => {
        return {
          url: 'changepassword',
          method: 'POST',
          body: formdata,
          headers: {
            'authorization': `Bearer ${userLToken}`,
          }
        }
      }
    }),
  }),
})

export const { useRegisterUserMutation,useRegisterSchoolAdminMutation, useRegisterStudentMutation , useLoginUserMutation, useGetLoggedUserQuery, useSendPasswordResetEmailMutation, useChangeUserPasswordMutation } = userAuthApi