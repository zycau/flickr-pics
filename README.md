# Welcome to Flickr-Pics

This application is using the Flickr public feed ( https://www.flickr.com/services/feeds/docs/photos_public/ ) that allows users to search Flickr and see 20 matching results.

The layout of this application is designed to be responsive.

## Online demo

Click [here](https://yucheng-flickr-pics.herokuapp.com/) to see it on Heroku

![Home page](https://yucheng.yz.id.au/flickr-pics/homepage.jpg)

## Features

* Basic: React + React-Router + Reactstrap
* State management: Context API
* Data fetching: fetch-jsonp
* Hooks: React hooks, React-Router hooks, custom hook

## Project structure

```
 flickr-pics
 ├── README.md
 ├── package.json
 ├── package-lock.json
 ├── LICENSE
 ├── .gitignore
 ├── node_modules
 ├── public
 │   └── index.html
 └── src
     ├─ App.js
     ├─ index.js
     ├─ components
     │  ├── BigImage.js
     │  ├── Header.js
     │  ├── ImageInfo.js
     │  ├── LoadingText.js
     │  ├── NoResultText.js    
     │  ├── PicCard.js
     │  ├── SearchBar.js
     │  └── WelcomeText.js
     ├─ context
     │  └── picsContext.js
     ├─ css
     │  └── style.css
     ├─ hook
     │  └── usePicInfo.js
     ├─ pages
     │  ├── Image.js
     │  └── Images.js
     └─ propTypes
        └── indexType.js
```

## Quick start

```sh
 git clone https://github.com/zycau/flickr-pics.git
 cd flickr-pics
 npm i
 npm start
 ```

Then open [http://localhost:3000](http://localhost:3000)









