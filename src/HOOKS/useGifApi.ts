import { useEffect } from 'react'

export default function useGifApi({ trendingEndpoint, searchEndpoint}) {
  const [trendingResponse, setTrendingResponse] = useState()
  const [searchResponse, setSearchResponse] = useState()
  const response = {
    trendingResponse,
    searchResponse
  }

// Make this call in the body of a custom hook
// Pass in the trendingEndpoint and the searchEndpoint as arguments
// Do all the handling of data there
// return both the error code (200, 404, etc.)
// as well as the response data
useEffect(() => {
  // Make your API calls
  // Handle network errors
  // Other stuff, like setting "results" state
}, [trendingEndpoint, searchEndpoint])

  return response
}