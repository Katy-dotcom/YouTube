# YouTube
Front-end application clone of the YouTube Video Streaming platform for educational purposes developed with React js. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [React Hooks](#React-Hooks)
* [App preview](#app-preview)
* [Future developments](#future-developments)

## General info
Design of this project was inspired by https://github.com/theshubhagrwl/youtube-clone-react.

YouTube web application with responsive design. Router and routes are implemented to redirect user to different pages through the menu links in sidebar.

Application have four main functionalities/ four main pages :
* Home where current most popular videos are shown.
* History  where a history of watched videos is displayed.
* Liked videos where user can see list of videos which he or she marked as favourites
* Search history where user can see last looked up terms, how long ago was the term searched and a button to show videos.

User can choose between light and dark theme. 

## Technologies
Project has been created with:
* React v17 / create-react-app v5.0  https://github.com/facebook/create-react-app
* React Router v6
* React Moment
* MUI library v5
* localStorage
* Youtube Data API https://developers.google.com/youtube/v3/docs
* API proxy developed by @bergespablo
* Firebase

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## React Hooks
-useState
-useEffect
-useContext

## Preview
You can watch short demo on https://www.youtube.com/watch?v=G9xGum6pAac

You can try the app here: https://fir-944fc.firebaseapp.com/

![image](https://user-images.githubusercontent.com/76691416/156666407-34ff9038-fda6-48c1-b821-3220d453a81c.png)
![image](https://user-images.githubusercontent.com/76691416/156666770-beeafb75-f567-4584-b591-9d2193f9850d.png)
![image](https://user-images.githubusercontent.com/76691416/156666848-7db4ebca-4a87-4134-a924-ca5ca22a2fe0.png)



## Future developments
* SignUp and Register
* Implement protected routes
