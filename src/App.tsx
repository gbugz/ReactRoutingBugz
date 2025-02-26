import { useState, useEffect } from 'react'

function App() {
  // query parameter input states
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(5)

  const [trendingEndpoint, setTrendingEndpoint] = useState()
  const [searchEndpoint, setSearchEndpoint] = useState()
  const response = useGifApi({ trendingEndpoint, searchEndpoint})

  // Create a button that, when clicked, sets the state of the endpoint variables

  // Calling setOffset will notify REACT!!!
  // When React is notified, then this component function will be called AGAIN!!!
  // That happens a LOT
  // We don't want to make api requests that often...

  // Giffy
  // Make an API call
  // show that result in a React component
  // have sum fuhn

  /**
  The endpoint example: https://api.giphy.com/v1/gifs/trending?api_key=QqBFll1cgrTFJvAO7BLIy4oXow6CVT9P&limit=5&offset=0&rating=g&bundle=messaging_non_clips

  The path: "https://api.giphy.com/v1/gifs/trending"

  The start of query parameters: "?"
  The query parameter name: "api_key"
  The equals sign: "="
  The query parameter value: "QqBFll1cgrTFJvAO7BLIy4oXow6CVT9P"

  The delimiter: "&"
  The query parameter name: "limit"
  The equals sign: "="
  The query parameter value: "5"

  The delimiter: "&"
  The query parameter name: "offset"
  The equals sign: "="
  The query parameter value: "0"

  The delimiter: "&"
  The query parameter name: "rating"
  The equals sign: "="
  The query parameter value: "g"

  The delimiter: "&"
  The query parameter name: "bundle"
  The equals sign: "="
  The query parameter value: "messaging_non_clips"
  */


  // Buttons to setQueries -> triggers useEffect -> makes an API call -> sets response state
  // Inputs for query parameters (validate the inputs to make sure they don't have errors)
  // Nice looking sticker/gif showing things that render the results

  
  return (
    <>
      <div>
        <input setTrendingEndpoint={setTrendingEndpoint} setSearchEndpoint={setSearchEndpoint} />
        <input 
        type="text"
        value={userQuery}
        onChange={()=> setUserQuery()}
        placeholder="What gif would you like?"

        />
        <button id="search-button" onClick={searchHandler(event)}>Search</button>




        <GifDisplay response={response} />
      </div>
    </>
  )
}




export default App

// Question: What is URL encoding?