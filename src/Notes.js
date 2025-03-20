//*In the login Form Component , We can also include the sign up feature so we don't need to build another component for the sign of feature we can use the same signin component both for sign in  & sign up and to do it We have created a state variable named is sign up and we set its initial value to true and no wat the bottom portion of the for mwe have given a clickable paragraph so if we click on that then it will trigger the onclick event of that element and then when that onClick event triggers, Then we set the value to the opposite of the previous value using the (!)not operator. like this -  onClick={() => setIsSignIn(!isSignIn)}.
//* So when the user clicks it and the state variables value become true then depending on that condition we change the form and we also display other input elements(full name input elm) as needed which will be dependent on this state variable we created for sign in  & up.

//*About formik
//* If we have a big farm in any kind of application which has so many input fields then it becomes difficult to do validations for all elements in that scenario we should use of library which can help us to handle form validation and other things related to form and a famous form related library is formik.

//* ⁡⁣⁢⁣Now we are going to learn about form validations, so when should we validate a form?
//*  If I go to my sign in form when I click on my sign in button it should validate the form and if there is an error message it should show some error message , this is the first thing we want to develop , we will do form validation and along with form validation we will also see what is use ref hook .
// *There is sign in button and a sign up button, if I click on any of this button what should happen?  according to whether it is a sign in button or a sign up form we can just log in the user or we can sign up the user but 1st thing that we will do is 1st of all we will validate  the form data ,
//* To validate the form Let us create a file inside utils folder named validate.js , so I will write my validation logic inside my utils so I will add all the validation logic in the validate.js so I want to create this separate file and separate function that validate for us.

//*   lets create a function chequeValidData() and this function will check if we pass email and password to this function it should check for validation , it should validate and let's export it and now if my email or password is not correct it will not valid then send me an error message, let us see how we can do that for email validation, let us use our regex(regular expression) , first of all let's find regex for email validation from google, so we got this(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) .
//* on every regex we can use a method named test() for validating some data based on that regex.In this test method we will pass the email we received as parameter. and it will return true if it passes and it will return false fails.
//* and similar we will do for password with this regex for password (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

//* if validation passes then we will return null but if it doesn't pass then we will return error message.

//* How we will we get the data(email,password) from the UI?
//* there are two ways one is using a state variable, second is using the useRef hook we can have the reference of the input elements, so we will use this second one, to reference the input elements first we have to create two constants named email and password using useRef hook and then and then to get get reference of the input elements we have to mention the ref={email} attribute like this in the email input element , and similarly in the password input element that's how we will get the reference of the input elements.

//* ⁡⁣⁢⁣For building the authentication we need a backend so we will use Firebase⁡

//* ⁡⁢⁣⁣FireBase setUp⁡
//* first go to their website , on their navbar click on the option "go to console" click it. if you are building a new project then click on new project option and provide details about your project.
//* once project is created , you have to choose what kind of project you are building among ios, android, web. We are building web app so we will choose "web"
//* then again it will ask you project name , fill it, then it will ask you to install firebase using this command - npm install firebase
//* then inside the utils folder we will create a firebase.jsx file , and their we will paste the id they are giving, it is necessary to get all of theis copied here.
//* Installing Firebase CLI
//*To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool)
//* command to install firebase CLI - "npm install -g firebase-tools"

//* now to host immediately we have to login into firebase . command to log in - npx firebase login
//* now we have to initialize firebase in our project using the command - npx firebase init
//* then it will ask you to enter y to proceed. then it will give you many options , you have to choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".
//* to select it go to this option then press space bar to select the option then press enter.
//* then as we already developed some part of our project we have to choose - use an existing project
//* then it will ask -  What do you want to use as your public directory?
//* we have to write 'dist' if we rae using vite. Because after running the build command , the final folder name which will contain all the production code will be name dist. for create react app it should be build. for parcel iyt should be dist.2.20.24
//* then it will ask :- Configure as a single-page app (rewrite all urls to /index.html)? => no
//* then it will ask :-Set up automatic builds and deploys with GitHub?=> no
//* then it will ask :- File dist/index.html already exists. Overwrite? no

//* then to deploy run this command - npx firebase deploy
//* it will deploy your app - link for this project deploy - https://netflixgpt-9b986.web.app

//* now the main purpose to use firebase was to do authentication for the users, so we have to come back to project overview page, in this tab click on authentication. then in the native providers tab choose the option email and password as we want use this option for authentication. and enable it

//* now for this project, using email password authentication is enabled by firebase but yet we have not implemented it.

//* to implement it , the best practice is to learn how to read documentation.
//* first we will search in the google firebase documentation and then after opening its documentation their is a search bar , in that search bar we will search firebase authentication , a search suggestion will appear written   named firebase authentication we will click on that , a new page will open, in that page the side bar has many options ,under authentication section their is a sub section 'web' their we have to find password authentication,and click on it.
//* A page will open, here we can find a heading "Create a password-based account" it is for building the sign up feature , and below that another section named "sign_in_a_user_with_an_email_address_and_password"
//* page url -"https://firebase.google.com/docs/auth/web/password-auth"

//* in both of the sections , there are two kind of apis , 1.web modular api(latest),2. web namespaced api(old way), so we are going to use the latest way.
//* now in the example code , in the first line we import this-
//*import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//* getAuth is needed for authentication and createUserWithEmailAndPassword  function is for creating email and password.
//* in the next line, the code is - const auth = getAuth();
//* now this line , we are going to see this line many times, either for sign in , sign up , password reset , or any auth related feature. that's why we are doing to put this line in our firebase.js file. and export it from there , so we can use it whenever needed. So we don't have to call the same function again and again in many files.
//* So let's start implementing the feature .
//* So we will make a if block , copy the sign up code from the firebase website and paste it inside the if block like this:-
/*if (!isSignIn) {
      //* for Sign up logic(as email and password are reference variables (made using useref hooks) that why to pass the value we have to write email.current.value)
      createUserWithEmailAndPassword(
        auth,
        email.current.value, //* as email and password are reference variables (made using useref hooks) that why to pass the value we have to write email.current.value
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //* printing the user object to the console after he signs up
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //* showing the error message on the ui if any error happens
          setErrorMessage(`Error -${errorCode}: ${errorMessage}`)
        });
    }*/

//* Now let's write the sign In logic , So we have to gp agin to same firebase page , where have sign in code example, get that code, and now below the signup block we have to write another block - a sign in block this time and put the code inside it.like this:-
/*
if (isSignIn) {
      //*for Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //* printing the user object to the console after he signs up
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           //* showing the error message on the ui if any error happens
           setErrorMessage(`Error -${errorCode}: ${errorMessage}`);
        });
    }
*/
//* when we signin it takes an email and a password and it returns as the user, it signs in the user, what do you mean by sign in? sign in basically it sets up the cookie it basically gives us an access token so that we communicate with firebase we can authenticate it got it that is what sign in.

//* Now what will happen we have to implement one more cool thing,if the user sign up or if the user sign in , we will get this user object(get as response from firebase),and I will have to keep the user object with us because I can need this user object anywhere in my app ,so what I will do is as soon as the user sign in or sign up I will just add all that data to my Redux store and we will navigate the user to my browse page ,so let's write that logic.

//* part 6
//* Now to save the user in the redux store we have to install the redux toolkit and react-redux so using this command we will install it - npm i @reduxjs/toolkit react-redux .
//* now lets build our redux store and userSlice and provide the store to our app.

//* ⁡⁣⁢⁣Adding the user data to our redux store when the user Sign In/Sign Up. and navigate the user to the browse page.⁡
//* Now to add the user(we get from firebase after successful authentication after sign up or sign in) to the redux store, we can write dispatch actions in many places like where we sign up the user and where we sign in the user, and also when the user log out we also have to dispatch an action their to dispatch the remove user action. But why we need to write the dispatch action in so many places ? Because we have a better solution, firebase offers an api named onAuthStateChanged() . we can see inside the same web section inside authentication. Inside web we have "manage users" their it is present.
//* onAuthStateChanged() gets called when ever the user sign in , sign up , sign out, basically whenever authentication state changes. So if we use this we don't need to dispatch the action multiple timed here and there. We can do the dispatch action inside this function.
//* We are gonna place this api in a parent component like in the body component(or in app.jsx it doesn't matter).
//* Let's got to the body component and use this inside a useEffect hook with an empty dependency array to call this once initially because this api is like an event listener so we just need to attach this with our app just once, So we get the code firebase website example. and paste it in body.like below
/*  onAuthStateChanged(auth, (user) => {
    if (user) {
      //* this block gets executed when the user signs in or sign up
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    } else {
      //* this else block gets executed when the user signs out
      dispatch(removeUser());
    }
  });*/
//* then we come to back to our log in component, and inside the handler function , when the user signed in and we got the user data below that we will navigate the user to the browse page. So we will use the useNavigate hook coming from react router dom. we will call this hook and save it's value to a constant named navigate. now where we got the user user below that we will call the navigate function and navigate the user to the browse page.
//* we didn't do the navigate in the Body inside the onAuthStateChanged api because in the body file we implemented the routing So it is the routing parent elm so we can't use navigate in the parent routing element that why we are doing the navigation here in the log in component.

//* Sign out
//* On the same password authentication page in the bottom , also th code to signing out is available so built the signout feature using that.
//* Updating the name(Display name)
//* web => manage users page , there is a section "Update a user's profile", using it we can update the displayName when the user sign or sign up

//* one more important thing is we also have to update the store after we update the displayName inside our login component, and remember we have get the updated the user so we can get that from auth.currentUser after updating the user.
//* And also dispatch a removeUser action when user signs out to empty the store.

//* Episode 2 (Lesson 15 . netflix gpt - building the core)
//*  we still have some bugs so lets fix them and build other features
//*  now I am on the my login page but what if if I am trying to access my "/browse" page I can still access,but I should not be able to access my browse page. if I am not logged in, so basically this is like giving the private information to a lot of the user , kind of like the user is not logged in and he can still access the browse page,so how I can restrict this route? so this is an important and there is one more thing
// *  suppose in the user is signed in,  and if I try to go to my login page by changing the path in the url like "/login" it should redirect me to the browse page, in netflix if you go to Netflix.com does the same
//* if the user is not logged then somebody is trying to access this browse page it should redirect into my login page?
//* ans -  when we are not logged in , our user is null ,when we are trying to access our browse page we are not checking auth we are not redirecting to login if  the user is not  present,
//*  if the user access token is not there if the user is not there and somebody is trying to access browse it should redirect me to log in page , it should throw me away to my login page and that can only happen if I will check my auth on the browse page, and how can I do that? you know what the best part is our code for checking out is auth already written with us , our code checking the auth is written for us remember in the body component we have already written this onAuthStateChange()  , we have this event listener , you know whenever the page loads this event listener is loaded  and it is each time checking the auth of the user each time, the component is like that it is checking the auth of the user right, so this is an important function,the ideal solution will be  whenever the auth is passed we should redirect/navigate from here  basically we should navigate('/browse') from here to the browse page but the issue is if I will try to navigate from here it will not work, because it is inside the body component, in the body component we have the routing config set up, so navigate will only work inside any of child components inside the body, and we  want to navigate from this onAuthStateChange() function, because when we authenticate the user get his info then only we can fill the redux store with user info.
//* Show to tackle this problem we have to place the use effect book which is containing the onAuthStateChange() function in a central place of our app which is always available but also inside the RouterProvider, and header component is most suitable for it, because it will be always available.
//* so lets fix this issue by placing this useEffect in the header, and also do the navigate inside the onAuthStateChange() function after passing the auth.
//* so in the if block we will navigate to "/browse" page and from the else block we will navigate to "/" page. because else block will get executed wehn the user is not present, so when the user signs out or already not signed in, and because we placed this useEffect here in the header, that's why it is like an event listener attached to the header component.
//* because of this, whenever the user is in the user page and he manually tries to go to the page by changing the path adding /browse , then the header component start to render and this onAuthStateChange gets triggered and because the user not exists at that point so it redirects the user to the log in page, and similarly when the user is on the browse page and if he tries to go to the log in page, then as the user is present at that time so the if block will be executed from the onAuthStateChange() and it will again send the user to the browse page.

//* one more bug fix(not a bug actually a hygiene issue)
//*  I have this use effect in my header component, this use effect is called once when my component loads, right but my header can be loaded multiple times in a single session, so what will happen is it will keep attaching event listeners in my browser , it will kind of put this onAuthStateChange code every time my use effect is called , and see when my component is there it is perfectly fine to do but when my component unmounts  I should also unsubscribe to this action/effect, basically I am trying to subscribe to this auth event when my component loads, put this on  state change  like a event listener , it is kind of like a event listener wherever the user or state change ,whenever the user is logged in whenever the user is logged out this keeps a track of it ,so if my component unmounts , I want to unsubscribe to this event listener basically remove the effect. How will I do that? I will have to do cleaning inside our use effect,  remember the returning cleaning function we can use inside our useEffect which we will be called every time our component gets unmounted, so basically I will have to return a clean up function from this header component's useEffect,and I have to unsubscribe my this event
//* so how will I unsubscribe? so basically this onAuthStateChange() returns an unsubscribed function , so if you will read the fire base  it will return a unsubscribe  function and if I will call this unsubscribe function it will remove this onAuthStateChange  from our browser , so we will unsubscribe it  when my header components unloads/unmounts  so when my header component will unload it will unsubscribe to this event .like this
/*   const unsubscribe = onAuthStateChanged(auth, (user) => {
      });

    //* for cleanup
    return () => unsubscribe();
  */

//* and finally we also made a constants file where we kept all the hard written strings like the logo and log in page background image and exported them to use anywhere in our project.

//* so start building the browse page
//* First of all we have vto figure out from where we will get the movie data which we are gonna display in our project.
//* Source - tmdb (the movie database) (search it on google)
//* This is a very tmdb right this is the database which has all the latest upcoming new, now playing, popular trending all the movies and we can use their apis  to fetch all these details , so what we will have to do is to go to tmdb(search on google) , you will have to  your edit profile once you go to this edit profile you have to go to api option  in the left hand side, you have click on api, and find your api key and and api access token , after clicking on api it will ask you to "generate nee api key" , click on that,then it will ask "What type of API key do you wish to register?" we have to select as a "Developer"  , then we have to accept the term and conditions, then we have to register our app (where we will use this api) , fill the details and and then we will get the api key and api access token .
//* react strict mode - when we created our react app using vite template, then in the main.jsx file it wraps our app component inside react strict mode component , and because of this react strict mode , in development mode StrictMode renders components twice (on dev mode but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).it is doing the extra rendering to check any inconsistency between our calls(api call or any function calls).it will through an error if their is an in consistency in your code.it will not happen in the production build.
//* so as we got the our api access token , now in this same page they mentioned the link of the api documentation page, we have to click on that , this is link link of their documentation page - "https://developer.themoviedb.org/docs/getting-started"
//* in this documentation page in the header menu , their is a option named "API Reference", click on that. and we will get all types of ap[is tmdb offers.in the left nav bar their are all types of options so we have to scroll down and find "movie lists" as we are now only interested about movies. in the movies list category , the first option is "Now Playing" ,using this api we can  get a list of movies that are currently in theatres. and they also mentioned that this is a get api. so we can only send the get request.
//* In the right side panel we have to choose the javascript language. and iot will give us written code template of this api. using it we acn make the api call.
//* in the template we can see that, in the fetch function , we have to also pass the options as the second parameter, this options object contain all information about method,headers(contains our api token). So without this our api call will through an error. So first of all we will copy this options and paste it in our constants file , with the name "API_OPTIONS", and export it.

//* now inside the browse component , first we will create getNowPlayingMovies named async function to fetch movies , now inside this function using the fetch function we will call the api, and also passing the options we saved in the constants file. and console.log the result. now our function is ready.
//* now e will call this getNowPlayingMovies() function inside the useEffect hook, and in the useEffect hook we have to mention the empty dependency array , to call this useEffect only once in the initial render. and now in the browser console we can see the results we got . we got 20 movies data to display.

//* now as we got the movie data from the api , now let's create movie slice to keep our data in the redux store, so we have created the movieSlice and inside it create an action named addNowPlayingMovies which will add the response of the api into the store.
//* now from the browse page we will dispatch the action to add the data into the store, and we have already added the slice into appStore.

//* right now , in the browse component we have written the logic of fetching the data and storing it in our store. but because of this our browse component is looking messing . So let's create a custom hook and put this logic there, then we will just import the hook and call it so just by writing one function call our work will be done.

//* part 15 - building the browse page
//*  In my Netflix website , we have this title container below the header and we have this background video and we have all these movies so let us just start building it , but first of all let us just plan how do we build it because once we plan this properly then writing code is very easy .
//* how will I make the ui?  this ui looks very complicated , lets try to make it as close as Netflix,so lets try to structure our app in a proper way
/*
- Header
- MainContainer
  - VideoBackground
  - VideoTitle
- SecondaryContainer
  - MovieList * n
  - cards * n

*/
// * basically what am I trying to say is if you want to structure your app how we can structure,basically I can divide my whole app right my whole browse page into two sections , so the first section is the mainContainer section ,so basically its like a main video container ,and it has video background  and it also has one more thing it has a video title and  there is one more secondary container , this secondary container has multiple movie lists and each of this movie list again has multiple movie cards , if you will make the ui you know first the ui is made inside head and then it is made inside the code , so never try to randomly start making ui ,otherwise you will have to keep refactoring your code, spend time in planning , so when I have planned this up now writing code will become very easy because now exactly I know I have to create main container then I will create my secondary container.

// * now as oue plan is ready , let's start to build the browse page.
//* as per the planning , in side the the browse page mainly we have two containers - 1.MainContainer and 2.SecondaryContainer. first lets created this components and export them then composition these inside browse page.
//* now inside the MainContainer we have decided two components,1.VideoBackground 2. VideoTitle. Here VideoTitle will overlay on the VideoBackground. let's a;so build these components and composition inside the mainContainer.
//* Now in the MainContainer we will subscribe to our movieSlice and get the data. now in the console first we will see null then see the results. the null is present because when the data is not even present in the store react trying to get it at that time so that's why we are seeing null. So we are gonna write a early return to solve this so the code execution only carries on when we have already have the data in the store.
//* now our problem is solved , let's extract the movie "poster_path" and "overView" from the first movie data because we want to display just just one movies data in the videoTitle component and then we will pass that data inside the VideoTitle component as prop. and then we will receive the props in the component and using the data we will build it.

//* part-16 building the video background
//* in the movie data we fetched, we don't have any trailer video information
//*  if you will go to tmdb api documentation in the api reference page and if I see the apis so in the left navbar inside movies category , we have a api which is known as "videos"  and this api  basically give you the videos of a particular movie, so it takes a movie id(we already have the movie id in the fetched movie data from now playing movies),  and it gives me the videos associated with this movie id we provide while making the call to this api, suppose if we have a movie and I give a movie id it will give me all the videos it has for a particular movie , video related to that movie, so let us use this api  and give it a movie id , so let us try this api first of all, this tmdb documentation is very nice , it gives you a playground where you can test , where you can test the apis, so what I can do is I can enter a movie id(we got from now playing movies api) and I can make a call directly from here,  so if I have my movie id , let's copy a movie id from our console and let's go to tmdb video api page, if I write movie id here,and I will click on try it, if I click on try it, it will make an api call and let's see the response I get.below we have the response copy we got from the site
/*
{
  "id": 1126166,
  "results": [
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Mel Gibson’s ‘Hit Your Mark’",
      "key": "XIHXt9Dms5U",
      "site": "YouTube",
      "size": 1080,
      "type": "Teaser",
      "official": true,
      "published_at": "2025-01-21T18:32:59.000Z",
      "id": "6790683b297a5d91d07745a6"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Mel Gibson’s ‘More is More’",
      "key": "1n5se-qHN7Q",
      "site": "YouTube",
      "size": 1080,
      "type": "Teaser",
      "official": true,
      "published_at": "2025-01-10T15:22:09.000Z",
      "id": "67849c13ababbba040bb6e83"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Mel Gibson’s ‘More is More’",
      "key": "-rca0ucR16E",
      "site": "YouTube",
      "size": 1080,
      "type": "Teaser",
      "official": true,
      "published_at": "2025-01-08T19:00:09.000Z",
      "id": "677f21b589fc5d94424e8785"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Official Trailer #2",
      "key": "Cml3CFDBj2s",
      "site": "YouTube",
      "size": 2160,
      "type": "Trailer",
      "official": true,
      "published_at": "2025-01-01T17:00:02.000Z",
      "id": "67757b4b7d1bc87de761d858"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Official Trailer",
      "key": "ojC9JBuccJA",
      "site": "YouTube",
      "size": 2160,
      "type": "Trailer",
      "official": true,
      "published_at": "2024-06-27T14:59:59.000Z",
      "id": "667d837e16f633cc52195216"
    }
  ]
}
*/
//* this is the response and so this response basically contains multiple videos associated with that movie , it will contain songs of that movie, short clicks of that movie, teaser of that movie, trailer of that movie,  so basically there are many videos associated to this movie "flight risk"  so in this "flight risk" movie there are multiple videos associated to it, but we are only concerned about a movie trailer , so if you will see there is an option of type:clip,type:featured, type:teaser ,there is a type:trailer, we are concerned about this trailer piece of information , basically we will make a call to videos api from our videoBackground component, we will give it a movie id and it will give me all the videos and then I am just concerned about the trailer , and this is basically this gives us information about the trailer, it says that  the trailer is available on youtube and it also gives you a key(this key is basically the youtube video id),  right this key is basically the youtube key for the trailer video and this will help us fetch the trailer fetch the video from youtube,so we will be using this,let us start using it, we have to make the api call to get this video background.
//*for this we will need movie id in our videoBackground component, to fetch the videos, I will basically fetch my trailer here inside the videoBackground component and to fetch my trailer video, I will have to make an api call,and to make that api call I will need movie id, so basically I would need movie id in the videoBackground ,so where will I get my movie id? from the mainContainer component, I can pass in movie id from mainContainer component as a prop to this videoBackground component, so let us pass in movie id and the movie id is already there inside my mainMovie constant inside my mainContainer component,  so I can just extract my id from here
//*⁡⁣⁢⁣ new bug eslint error: movieId' is missing in props validation⁡
//* now in the when we are trying to get movieId inside our videBackground component from props using destructuring, it was show an error "movieId' is missing in props validation".
//* this error is coming from eslint.
//* what is eslint?The pluggable linting utility for JavaScript and JSX.ESLint is an open source project that helps you find and fix problems with your JavaScript code. It doesn't matter if you're writing JavaScript in the browser or on the server, with or without a framework, ESLint can help your code live its best life.
//* vite react template by default comes with eslint.
//* in this problem it was asking from prop validation, which is not necessary for us, so there are two solutions for this 1. is we can add this line "// eslint-disable-next-line react/prop-types" before the line we are destructuring the prop, we already did it in our videoTitle component, it basically disables this eslint react/prop-types validation for the next line. or even we can remove the "-next-line" word and put is on the top of the ile file , it will disable eslint prop validation for the whole component file,but again in another component if we try to destructure any other prop then again we have to put this line.
//* 2 solution is go to eslint.config.js file and inside the rules we can disable it like
/*"rules": {
  "react/prop-types": "off"
}*/
//* now in the whole project this eslint react/prop-types validation will be disabled. it is a better solution rather than doing it on every file we are using prop.

//* now I will make an api call from videBackground component, let's make our async function getMovieVideos(), let's make an api call inside this function to that api and get the videos associated with that particular movie , and remember we have to pass the options (we already saved option inside constants file),see the use of constant is that, the options are present in one place and wherever I would need these api options we can import it from there, I am not writing this whole options object again and again,and this is the best practice , what a lot of people will do a lot of people just write the option every where they are fetching data and this will work for sure, but what will happen is suppose if your token changed then you will have to make changes like 10 places you will have to make changes in everywhere you used the options, but if we will import it from your constants, so we will just have to make it so suppose if a token change so I just have to make one change inside constants and all the places will be updated  so that is why we will use this api options from the constants right so let us import our api_options from constants.

//* I will get the data in Json.results  let me just console log and see if I have got this video trailer or not right so basically I am just concerned about this video trailer , I will call this getMovieVideos inside my use effect with empty dependency array to call it once in the initial render,I have got 31 video results and but I am just concerned about my trailer from this list of 31 ,I just want trailer how will I find my trailer inside them,and how do I find my trailer? I will filter my results basically this json.results I will cheque I will cheque if the video.name==="Official Trailer"
//*I have got my trailer over here right that is the first video inside my philtre data but what if that there is no video with the word official trailer inside it , so it can happen, so  our movie is maybe upcoming movie or maybe tmdv does not have that trailer or suppose if there were 31 videos and out of those 31 videos it does not have any trailer, so if that trailer is not there we should handle that case also ,how do you handle that case if my philtre data length  length is equal to 0 , then using ternary operator we will set the first video of our movieVideos as the movieTrailer.like -
//  const movieTrailer =filteredVideos.length > 0 ? filteredVideos[0] : movieVideos[0];

//*  so we are handling all the cases,now we have got this trailer with us ,we have got this trailer with us now we can we can just render this trailer into our component right we can just render this trailer into our component this trailer basically contains the youtube video key ,so this key is basically the youtube id you know every youtube video has a id let me go to youtube.com if I go to youtube.com so if you will open any video ,the video has a id we can see that in the url, this key which we are receiving is basically the same key/id ,we can just get this youtube video onto our page got it with this key, we are going to basically take this youtube video and put it onto our page, how do I do that so basically what will do click on this share button and find the embed code , with every youtube video if you click on the share button click on this embed  code  and you will get this iframe code over here so copy this code and this is the embed code and you will have to put this embed code into your videoBackground component
//* the iframe tag has some attribute like frameborder but in jsx basically they use the convention of using camel casing  so if you will write frameBorder like this it will not it will throw away like it wont throw an error now right it won't throw an error
//*right and similarly in allowfullscreen also if you will write allowFullScreen ,it will not throw an error, why it was giving error? so basically the code that we copied youtube that embed code is not a react code ,it was a html code so that is why we are just altering it for using in jsx
//* but let me tell you I do not need this allow full screen right I dont need anyways this allow full screen you can delete it

//*but  I do not need this allow full screen attributes we can delete width and height also, because we have to make this full screen and we have to put it behind , we have successfully got the video embedded from the youtube into our app , so now let us make this dynamic , how will you make this id dynamic? this trailer.key .but we have to save this trailer data someWhere after we get it from api . So first option is to make a state variable and save it inside the state variable, and second option is to save it into our redux store, so we can make another slice but that is not necessary, so we can use the movieSlice we created , so we have to go to our movieSlice, in the initial state we will add a property named movieTrailer and set its initial value to null then we will create an action addMovieTrailers and this will set state.movieTrailer = action.payload;   this videoBackground component will not have to manage its own state it will basically connect to the store and will fetch the trailer from there

// * Let's dispatch an action and what will be my action addVideoTrailer I will just pass in json.results.
//* Right now  I can get this dynamic id from store, how will I fetch from my store?  we will do a useSelector((store) => store.movie?.movieTrailer) .
//* So there are two ways either you can handle everything from your component state or you can handle it from your store so I am just putting everything in Redux store.
//* overlap on the background video component
//* to make the videoTile component on the videoBackground component, first we have videoTile component absolute, and to make the video full screen on the iframe tag we will add class w-[99dvw] to set the width to 99% of device viewport width. and to maintain the width- height ratio(aspect ratio) , we will add another classname "aspect-ratio" to the iframe tag because it sets the aspect ration to 16:9 which is ideal for all videos, and now we will also add this classnames to our videoTitle component, to match both component sizes, because then only the video can't be play paused because it will hover on top of the video, and also to make the videTitle more visible we will give the videTitle component a gradient background from left to right using the classes "bg-gradient-to-r from-black to-50%".
//* ⁡⁣⁢⁣autoplay the video
//* to autoplay the video inside the url, after the video id we have to add the this:- "?autoplay=1&mute=1" inside the iframe tag.
//* loop/replay video automatically
//* to loop the video automatically after the "?autoplay=1&mute=1" string we also have to add this - "&loop=1&playlist=" +movieTrailer?.key"

//* Building the secondary component
/* ⁡⁣⁢⁣Planning
- Secondary Container
  - movie lists
    - Now Playing movies(heading)
    - movie Cards(n)
  - movie lists
    - Upcoming movies
    - movie Cards(n)    
  - movie lists
    - Popular movies
    - movie Cards(n)⁡
*/
//*3.28
//* so according to the plan we have built the secondary container, and we also buil some custom hooks:-  usePopularMovies();  useTopRatedMovies(),useUpcomingMovies(); to fetch popular, top rated , upcoming movies and we save that data the store and from the store using useSelector we got the data then, passed into movie list components as prop, then from movie list component we passed the data to movieCard component as prop. we also used negative margin to uplift the movie lists component.

//* episode - 16
//*  NetflixGpt - wrapping up
//* now we are gonna build our gpt movie searching feature
//* basically we will build new component, where the user can search movie related info like - best action movies, or horror movies , or any movie related query and using that query we will make a call Open AI's gpt api , and depending on that response from the api , we will fetch some movie data related to the response we got, and then we will display those movie results on our gptSearch component.
//* for displaying the the gptSearch component, we will add a "gpt search" named button on our header.
//* onClick of gptSearch button we will display our gptSearch component and hide the mainContainer and the secondaryContainer present in the browse page.

//* for gptSearch feature will create another slice inside our store named   'gptSlice'.
//* inside the initialState we will create a property named showGptSearch and its initial value is false, because by default we will keep this gptSearch component hidden. and inside the reducer we will add an action name toggleGptSearch() inside this we will toggle the boolean value of the showGptSearch property we have inside the state.
//* when we will click on the "Gpt Search button" we will dispatch  an action using the action we just built inside the gptSlice named "toggleGptSearch" . and because od the toggle condition we written, the showGptSearch property value will become true. and when it become true we will display the <GptSearch/> component we are gonna create, and when the user will again click on the gptSearch button then because of the toggle condition , showGptSearch property value will become false then we will again display the mainContainer and the Secondary container below the <header/> component inside the browse page.
//* let's build the gptSearch button in our header , our <GptSearch/> component and the GptSlice with toggleGptSearch action.
//* using the same showGptSearch property we created in the gptSlice, and importing it using useSelector hook inside the header component we have also built a functionality of changing the "Gpt Search" button text to "Home Page" when the user visits
//* now inside the GptSearch component , we will have a searchBar component named GptSearchBar it will include the input box where the user will search , so let's build this GptSearchBar component and inside it we also have language change feature, so lets' first composition this GptSearchBar component inside our GptSearch component.
//* ⁡⁣⁢⁣building the language change feature⁡
//* we are gonna only build this feature for gptSearch page
//* first of all inside the constants file we have to add this object to create language options
/*export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "bn", name: "Bengali" },
];*/
//* then create a languageConstants file in our utils and write the below code their here basically we save text for all languages
/*const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  bn: {
    search: "অনুসন্ধান করুন",
    gptSearchPlaceholder: "আজ তুমি কী দেখতে চাও?",
  },
};

export default lang;*/
//* now we have create to create a configSlice and add that to our appStore. this slice has a action name changeLanguage. this will change the language according to user selected language, we will add the select element in the gptSearchBar page.
//* in the gptSearchBar bar we have to add the below select element
/*<select
        className="p-2 m-2 bg-gray-900  text-white"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>*/
//* and also the handler function which is dispatching the action and the get the language from the store.
/*  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang); //* for language changing feature      
*/
//* also import the lang object we created inside the language constants
//* then we have to the change the placeholder text using this {lang[langKey].gptSearchPlaceholder} of the input field and also the text of the button using it :{lang[langKey].search}.
//* now our implementation is completed for the language change feature
//*
//* now we are gonna fetch the data, but as of now open ai's api is not free so we are gonna use gemini free api, so just search for it , got their website, log in , and go to the pai reference page, there you will get the option of generating api key . generate it. then come back to the documentation page
//* inside the "quick start" option they have told everything about how to use  it.
//* first we to install it using the command - npm install @google/generative-ai

//* let's hide our API Keys  to keep it safe.
//* So the process is written here :- https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/
//* first we have to install this dotenv package using this command - npm install dotenv --save
//* then Outside of the src folder in your project root directory, create a new file called .env.
//*In your .env file, add the API key and its corresponding value in the following format:
// for CRA applications
//*REACT_APP_API_KEY = A1234567890B0987654321C

// for Vite applications
//*VITE_SOME_KEY = 12345GATGAT34562CDRSCEEG3T
//* add the .env to the .gitignore file before moving forward to staging your commits and pushing your code to GitHub.
//* like this
//*  # api keys
//* .env
// You can now use the env object to access your environment variables in your React application.
// for CRA applications
// 'Gemini_Key':process.env.REACT_APP_API_KEY
//  for Vite  applications
// 'Gemini_Key':import.meta.env.VITE_SOME_KEY
//* remember it is important to keep the .env file on the root level.

//* ⁡⁣⁢⁣handling the api call to the gemini api.⁡
//* To get efficient results, so  if you go to gemini and you write something like this "funny Indian retro movies" you just write this. so it will give you random responses, but I just want the name of the movies, thats all and I want , in a specific format in comma separated way. So I have to give this a little more context/information,so how will I give it how will I give?
//*what I will do is in this prompt, I will not just pass this value "funny Indian retro movies" but I will pass it something like this ,so inside the constant prompt,  lets form query/prompt providing more specific information so we can get more specific results. here inside the prompt constant I will write my query as "act as a movie recommendation system and suggest some movies for the query: "searchText.current.value". Give me names of five movies comma separated .like this example given ahead :  Gadar ,Sholay,Koi Mil Gaya,Sanam Re,Aashiqui 2."
//* now using this prompt , we will call the gemini api to give us results.
//* now to call the api , in their documentation quick start guide, they have given this boiler plate code
/*const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());*/
//* we will create a gemini api helper file, where we will keep the the first two lines so genAI and model, their so these two lines are basically initializing the gemini api. and from their we will export the model, as we just need the model to to call the api. so let's create our gemini api file inside the utils folder.
//* now where ever we want we can import the model and using the prompt we can get movies from the api. So inside the GptSearchBar component let's try to get results.
//* it is working ,we got the response.
//* now to get the query from the user and use that inside the prompt, we will create a reference variable using useRef hook , named "searchText", and reference whatever the user is typing inside the input box. then use this searchText.current.value inside our prompt constant.
//* and we have created a handleGptSearch function where we will fetch the data from the gemini api.
//* using onSubmit event on the form we will call this handlerGptSearch function to get data, and we are using the onSubmit event on the form because either the user clicks on search button or click enter on his keyboard both will trigger the event. so now let's check if it is working.

//* as we have intentionally written the prompt constant inside the handler function to get the results of movie list in a comma separated way. but we got the data as a string and now we converted the sting into an array using the split(",") method which is split the data using the commas and converting it to an array of movies. and we name the array gptResultArray.
//* now as we got the data in a array format which contains all pf the movies. now we we have to make a function which will fetch the movies data which will fetch the movies data from tmdb api

//*⁡⁣⁢⁣fetching the movies data from tmdb api⁡
//* so outside of this handleGptSearch function we will create another function named searchTmdbMovie , as it will fetch the data so it will be an async function, so let's fetch the data , so this function will receive the movie name as a parameter, so we will pass the movie name as argument while calling this function, and using this movie parameter we will fetch data from tmdb and return the result. soour function is ready fro fetching data from tmdb.

//* this function takes only one movie and fetch data or that one movie, but we have many movies inside the the array we got gpt response. So we will loop the array using map method and call this searchTmdbMovie function for every movie , and save that response inside a constant named tmdbresults.
//* ⁡⁣⁢⁣use of Promise.all()⁡
//* but if we print this tmdbResults, then we will see in the console that we got an array of promises, and that is because searchTmdbMovie is an async function, and it takes some time to get the response and return, but before getting the response when react is trying to render it , that's why we are getting array of pending Promises. that why to get result from this Promises array, we will use await Promises.all(), it takes array of promises and only returns when all of the promises get resolved.
//* and we will save this in a constant named tmdbResults.
//* now inside the gptSlice we will , add two actions one is for storing this movies data we have inside tmdbResults and this actions name will be addMovieSuggestions, it will save the data in movieSuggestions property inside state, so we will take the data from here and display it on the gptSuggestions component we are gonna create. and also the second action named "addMovieQuery" this will save the userQuery inside movieQuery property present in state. We will use it to display the what the user searched in the GptSuggestion component.

//* now let's build gptSuggestion component, first we will create this component inside our components folder
//* here in this component we will get the data from the store using useSelector hook , so lets first get the movieSuggestions and the movieQuery form the store and now we will use this data. so using the the movieQuery we will display a header so basically what the user had searched.
//* in the movieSuggestions , we have have an array which conatains multiple arrays , and each array contains multiple movie objects, so we will loop this using map and for each movies Array wei will render an MovieList component which we have already used in secondary component, and that is the advantage of making reusable components.
//* now our GptSuggestion component is complete.

//* now in the MovieList component we have multiple MovieCard components, and we rae displaying this MovieList inside the secondary component and also in the GptSuggestion page.

//* Building MovieDetails component
//* now we want that when the user click on any of these MovieCard then a MovieDetails component should be displayed which will display the details about  any movie.
//* so onclick of this movieCard we want to display the MovieDetails component, so first of all we will create two action first addMovieDetails action, it will add all the movie details to the store onClick of this movieCard and second is toggleMovieDetails , it will be a boolean value changing action , which will help us to display the MovieDetails Component. Now after creating these two, we also need another action which is already built inside our gptSlice  named toggleGptSearch. onClick of this MovieCard , we will first do dispatch(addMovieDetails(movie)) to add the movieDetails to the store and then dispatch(toggleMovieDetails(true)) to display MovieDetails component and dispatch(toggleGptSearch(false)) to hide the GptSearch component if it is opened.
//* and the toggleMovieDetails(true) action the value of showMovieDetails property becomes true and because of toggleGptSearch(false) the value of showGptSearch property becomes false. and now using these two properties we will display the MovieDetails page .
//* So now we have to go to our browse page, and we had already imported the showGptSearch property imported here previously and now we have get the showMovieDetails property using useSelector hook from the movieSlice.
//* now we will write a condition that when showMovieDetails property value is true and showGptSlice value is false then only display the MovieDetails component, other display GptSearch component when when showGptSearch is true and when showGptSearch is false then display mainContainer and Secondary container.
/* ⁡⁣⁢⁣<div>
      <Header />
      {showMovieDetails && !gptSearchShow ? (
        <MovieDetails />
      ) : (
        <>
          {gptSearchShow ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>⁡ */

//* now in the movieDetails component we also need a button to go back to the home page, so we created it and onClick of this button we will dispatch two actions first dispatch(toggleMovieDetails(false)) to display the home page && second  dispatch(toggleMovieTrailer(false)) this for a display and hiding movieTrailer feature which we are gonna build now.
//* ⁡⁣⁢⁣building MovieTrailer Feature⁡
//* in the MovieDetails component we will add a button named trailer and on click of this button we want to display a Movie Trailer Video inside our MovieDetails page , so let's build a component for this, named MovieDetailsPageVideo , this component is basically very similar to our VideoBackground component but its size and positioning is bit different.
//* Now onClick of trailer button we want to display the MovieDetailsPageVideo component, to do that we will create another boolean value changing action named toggleMovieTrailer action inside movieSlice and this will change the value of this boolean property showMovieTrailer. So click of the Trailer button we will dispatch an action
//*for toggle the previous boolean value
//*dispatch(toggleMovieTrailer(!showMovieTrailer));
//* and also get the showMovieTrailer property inside movieDetails component fro displaying the MovieTrailer component.
//* So when we click on trailer button this showTrailerVideo property value become true then we will display the MovieDetailsPageVideo component and when user and clicks on the button then this MovieDetailsPageVideo component gets hidden , we will write this condition like this
/* ⁡⁣⁢⁣{showMovieTrailer && (
            <MovieDetailsPageVideo movieId={movieDetails.id} />
          )}⁡*/
//* this MovieDetailsPageVideo component will basically overlap on the Movie image.
//* now when the is on the movieDetails page and and the he clicks on the GptSearch btn on header then also we have to do     dispatch(toggleMovieDetails(false))  , to set showMovieDetails property value false only the gptSearch component can be displayed because of the condition we written on the browse page. and dispatch(toggleMovieTrailer(false)); so if the movieTrailer was playing and then user visits to gptSearch component then we can again set showMovieTrailer property value to false.

//* ⁡⁣⁢⁣More info Button in mainContainer work⁡
//* onClick of this button we want to also show the movieDetails page so first  to do dispatch(addMovieDetails(movie)) to adding movie Details to store and dispatch(toggleMovieDetails(true)) to display movie details component and dispatch(toggleGptSearch(false)) to ensure hiding gptSearch component

//* ⁡⁣⁢⁣Play Button in mainContainer work⁡
//* to make this button work we have to dispatch the same actions we mention above for more info button ,and one more extra option and we that is dispatch(toggleMovieTrailer(true)) to start the trailer video immediately when the movieDetails component comes into view after clicking this button.
/////////
//* ⁡⁣⁢⁣Memoization⁡
//*Memoization is a programming technique used to optimize the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This technique is particularly useful in scenarios where the same computation is repeated with identical inputs, as it helps avoid redundant calculations and improves overall execution speed.
//* we may think that as we used the useEffect hook with empty dependency array for fetching data , to display in our mainContainer and secondary container present in browse page, and that is only making the api call once in the initial render of the component, but that happen when the components are always present in the ui(so even rerender happen it won't call useEffect), but when the user go to the gptSearch component, and then again come back to home page where we have main and secondary components present, then that initial render again happens, si it will again call the useEffect and fetch the data to display on main and secondary component. but that is not needed because we already have same data in our redux store,so we can stop making the api calls when the data is already present in the store, and this technique of making less api calls by using already cached data is called memoization. So even thousand users using our app , and they go multiple times to gptSearch page and come back to home page, then it will make so many unnecessary api calls, that's why to save making unnecessary api calls , we will use this Memoization concept.
//* so basically we will go inside every hook file which we are using inside secondaryContainer or mainContainer, basically all the hooks we have created and and inside those files , we will get the store using useSelector hook. and inside the useEffect hook where we are calling the data fetching functions, there we will write a condition that if the data is already present in the store then we will not make the function call to fetch the data again as it is already present.
