# The Ultimate Hotel Booking Application

This web application, built with ReactJS and Vite, enables users to search for and list hotels, filter them based on various criteria (price, location, etc.), and book their preferred accommodations. It features react-icons, a theme switcher, and multi-language support. Also, it consumes a REST API.

![main](pokedex.png)


## Features

- **Public and Protected Routes:** Secure user authentication with react-router-dom..

- **Intuitive Interface:** Modern, responsive design optimized for various devices.

- **Reusable Components:** Modular code structure for easy maintenance..

- **Hooks:** Employs useState, useEffect, React Hook Form, React Router Dom, and a custom Redux Toolkit hook (zusland) for API connections and protected routes. 

- **Languages:** Supports multiple languages including German, Italian, Turkish, and English. 

- **Theme Switching:** Allows users to switch between light, dark, and colored themes. 

- **Tailwind CSS:** Used for styling the application. 

- **ReactJS:** JavaScript framework for building user interfaces. 

- **Vite:** Fast build tool based on ES modules. 

- **react-icons.github.io:** Customizable icons for a visually appealing interface.

- **Licensing:** MIT license allows for use in any personal or commercial project.

## Core Functionalities:
- **Hotel Search:** Search for hotels based on location, price range, and other criteria.
- **Hotel Details:** View detailed information about individual hotels, including images, descriptions, reviews and ratings.
- **Booking:**  Book your desired hotel rooms directly through the application by specifying your preferred dates of stay.
- **User Registration and Login:** Create user accounts and securely log in to manage bookings.
- **Booking History:** View and manage current and past bookings.
 

You can visit the online platform at [https://6-booking-app-fmg.vercel.app/](https://6-booking-app-fmg.vercel.app/)

## System Requirements

- **Operating System:** Ubuntu 22.04.4 LTS or Windows 10 Pro 1803 

- **NodeJS:** Version 18.20.4 or higher 

- **npm/npx:** Version 10.8.4 or higher 

- **Vite:** Version 5.4 or higher 

- **ReactJs:** Version 18.3 or higher
    
## Alternative Systems Tested

The project has also been tested in the following alternative environment:

- **Operating System:** Windows 10 Pro 1803

- **NodeJS:** 18.20.4

- **npm/npx:** Version 10.8.4 or higher 

- **Vite:** Version 5.4 or higher 

- **ReactJs:** Version 18.3 or higher 

## Contributions
Contributions are welcome. If you find any errors or wish to add new features, feel free to open an issue, pull request, or fork the repository.

## Images

Pokemon detail screen 

![main](poke_det.png)

## Useful Commands

View system information:

uname -r

sb_release -a

node -v

npm -v

## Project Structure

The project structure is:
```
index.html
readme.md
└── src/
    ├── index.css
    ├── main.jsx
    ├── app/
    │   ├── Detail.jsx
    │   ├── Home.jsx
    │   ├── index.js
    │   └── pokdex.jsx
    ├── containers/
    │    └── languaje.jsx
    ├── contexts/
    │    └── nameContext.jsx   
    ├── languajes/     
    │    ├──── de.json   
    │    ├──── en.json   
    │    ├──── es.json   
    │    ├──── index.js
    │    ├──── it.json 
    │    └──── tr.json   
    ├── routes/  
    │    ├──── AppRouters.jsx   
    │    └──── ProtectedRoutes.jsx
    ├── styles/
    │    ├──── details.css   
    │    ├──── filters.css
    │    ├──── home.css
    │    ├──── nofound.css
    │    ├──── pokeCard.css
    │    ├──── pokedex.css
    │    ├──── pokelist.css
    │    └──── search.css
    ├── components/
    │    ├── LanguageSelector.jsx
    │    ├── LanguageSelector.jsx
    │    └── pokedex/
    │        ├── Filtes.jsx
    │        ├── notfound.jsx
    │        ├── PokemoCard.jsx
    │        ├── PokemonList.jsx
    │        ├── Search.jsx
    │        ├── Search.jsx
    │        └── UserCard.jsx
    ├── hooks/
    │   └── useFetch.jsx
    ├── layout/        
    │   └── Layout.jsx
    └──  assets/
        └── img/
           ├── home_bg.png
           ├── pokedex.png           
           └── hero.png

```
# Installation

To install, download the project from the repository:

```bash

git clone https://github.com/fabinnerself/6BookingApp-fmg.git

luego correr:

cd  6BookingApp-fmg

npm i axios  react-icons react-router-dom   
```

(C) Favian M.G. 2024 