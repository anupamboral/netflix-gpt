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
