## Description
This is a RESTful API to pratice some concepts of async functions. I used a lib with a specific function to find pokemons and did a little increment with a page of trainers.

## How to Use

- [1] Open a navigation terminal (CMD, PowerShell or other of your preference) and execute the command:
 ```
git clone git@github.com:FelipeFSdev/Pokedex.git
```
- [2] When finished, navigate into the directory and execute the command:
```
npm i express 
```
and then
```
npm i utils-playground
```
The first one is a Node.Js module that provides features for web. And the second one is a simple library to pratice asynchronous programming.

[3] After the installation of the Express framework is completed, run the command below to start the API.
```
node ./src/index.js
```
⚠️ It's important that you have Node.js installed on your computer.

## HTTP Requests 


⚠️To these tests is not necessary have some API test tools like Insomnia, you can run in your browser.
- [4] In the navigation bar you will create some routes like you can see in the table below:
  | Method             | Name               | Routers                                           |
  | :----------------: | :----------------: | :----------------------------------------------: |
  | **GET**            | Open your "Pokedex"| http://localhost:4000/pokedex?page=1    |
  | **GET**            | Search a specific pokemon | http://localhost:4000/pokedex/pokemonPage/5                |
  | **GET**            | List trainers you've been met     | http://localhost:4000/pokedex/trainerPage            |

You can change the parameters (?page=1 to ?page=10, for example) and discover new pokemons
  


