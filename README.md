# Netflix Gpt

[Live Link](https://n-etflixgpt-anupam.netlify.app/).

## Details

**_🔮 What I Built:-_**

- ✅ AI-powered movie recommendations functionality "GPT Search" built using Google gemini-2.0-flash API.
- ✅ Dynamic movie data fetching from TMDB API .
- ✅ View latest, now-playing, top-rated , popular, upcoming movies on the browse page.
- ✅ Know the details about any movie like overview and released date in the details page.
- ✅ You can select among three language options(Hindi , English , Bengali) in the GPT Search section.
- ✅ Watch the trailer of any movie on the movie details section directly embed to YouTube.
- ✅ Secure authentication powered by Firebase authentication (Email-based)
- ✅ Optimized state management using Redux
- ✅ Memorization to reduce unnecessary API calls
- ✅ Fully responsive, smooth ,user-friendly UI built leveraging the power of Tailwind CSS.

## Journey of building this project

- built using react + vite(bundler)
- styled using Tailwind CSS
- setting up routing
- Header
- sign in / sign up form page
- Form Validation
- useRef Hook
- Firebase Setup
- create sign up user account
- deploy to firebase
- Create Sign Up user account
- Implement Sign In user Api
- Created redux store with user Slice
- Sign out feature
- bug fix - sign up user displayName and profile picture update
- bug fix - if the user is not logged in redirect /browse to log in page and vice-versa
- unsubscribe to onAuthStateChange callback for cleanup
- add hard codded values to the constants files
- register our app on tmdb and get the access token
- get data from tmdb now playing list api
- custom hook for nowPlayingMovie
- create movieSlice
- Update store with movie data
- Planning for MainContainer and secondaryContainer
- Fetch data for tailer video
- update store with trailer videos data
- Embedded the youtube video and make it autoPlay and mute
- Tailwind classes to beautify the main container
- built secondary component
- built movie list
- built movie card
- tmdb img cdn url
- made the browse page amazing with tailwind css
- built custom hooks to fetch and store popular,top-rated ,upcoming movies
- Gpt search page
- Gpt Search bar
- multi language feature for gpt SearchBar
- get Gemini api key
- gpt search api call
- fetched movies from tmdb
- building MovieDetails page
- displaying MovieTrailer on MovieDetails page using trailer btn
- memoization

# Features

- Log In/Sign Up Page
  - Sign In / Sign Up Form
  - Redirect to browsing page
- Browse Page (only after authentication completion)

  - header
  - Main Movie Container(Hero component)
    - Trailer running in the background
    - Title and description
  - Movie Suggestions component
    - movies list in row format

- GPT Search
  - Search Bar
  - Movie suggestions
- Movie Details component
  - Movie Overview
  - Movie Poster
  - Movie Trailer Video
