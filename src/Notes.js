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
