import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2Y1MDUxNjhlMDVkNTI3MjA0Y2I5NTZjZmFhOGFlOCIsIm5iZiI6MTczOTk2MDA2Mi4wNjMsInN1YiI6IjY3YjVhZWZlOWUzMmY3MmI0ZDg4YzFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-t7-9b_jiQif7K3fESRFV8-1k73eavexukAqvSSmSFk" // localStorage.getItem("access_token")
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      dispatch(logout())
    }
  }
  return result;
};

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["BLOG", "PRODUCT"]
})
