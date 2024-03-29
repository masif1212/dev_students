import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ams.firefly-techsolutions.com/services/'
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json'
          },
        }
      }
    }),

    registerSchoolAdmin: builder.mutation({
      query: (user) => {
        return {
          url: 'schooladmin',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
            
          }
        }
      }
    }),

    schoolAdminLogin: builder.mutation({
      query: (schooladmin) => {
        return {
          url: 'schoolAdminlogin',
          method: 'POST',
          body: schooladmin,
          headers: {
            'Content-type': 'application/json',
            
          }
        }
      }
    }),

    loggedSchoolAdmin: builder.query({
      query: (token) => ({
        url: 'loggedSchoolAdmin',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },
      })
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

    getStudent: builder.query({
      query: () => ({
        url: 'getstudent',
        method: 'GET',
      })
    }),

    studentattendance : builder.mutation({
      query: (any) => {
        return {
          url: 'studentattendance',
          method: 'POST',
          body: any,
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
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
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


//=============================== TEACHER SECTION===============================================================//
    registerTeachers : builder.mutation({
      query: (teacher) => {
        return {
          url: 'registerTeacher',
          method: 'POST',
          body: teacher,
          headers: {
            'Content-type': 'application/json',
            
          }
        }
      }
    }),

    loginTeacher: builder.mutation({
      query: (teacher) => {
        return {
          url: 'teachersLogin',
          method: 'POST',
          body: teacher,
          headers: {
            'Content-type': 'application/json',
            
          }
        }
      }
    }),

    loggedTeachers: builder.query({
      query:()=>({
        url: "loggeduser",
        method:"GET", 
      })
    }),

    schoolRegister: builder.mutation({
      query:(addSchools) =>({
        url: 'createschool',
        method: 'POST',
        body: addSchools,
        headers: {
          'Content-type': 'application/json',
        }
      })
    }),

    getschools :builder.query({
      query:()=>({
        url: "getschools",
        method:"GET", 
      })
    }),

    getTeachers: builder.query({
      query: () => ({
        url: 'getTeachers',
        method: 'GET',
      })
    }),

    

    registerTechAttendance: builder.mutation({
      query: (attendance) => {
        return {
          url: 'teacherattendance',
          method: 'POST',
          body: attendance,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

  }),
})

export const {useLoginTeacherMutation,useRegisterTeachersMutation, useRegisterUserMutation, useRegisterSchoolAdminMutation, useSchoolAdminLoginMutation, useLoggedSchoolAdminQuery, useRegisterStudentMutation , useLoginUserMutation, useGetLoggedUserQuery, useGetStudentQuery , useSendPasswordResetEmailMutation, useChangeUserPasswordMutation, useGetTeachersQuery, useSchoolRegisterMutation, useGetschoolsQuery, useRegisterTechAttendanceMutation, useLoggedTeachersQuery  } = userAuthApi
