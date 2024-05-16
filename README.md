# PROVA TÈCNICA PARLEM - FRONT-END VUE.JS

This repo is a solution for this frontend technical test and involves creating a mock API with records of clients and products, and a client app that displays the API data in two views and allows for filtering and ordering operations.

🔗 [View live project](https://prova-tecnica-parlem-black.vercel.app/)

---

### Contents

- [Project details](#project-details)
- [Usage and features](#usage-and-features)
- [Project set up](#project-set-up)
- [Further improvements](#further-improvements)

---

## Project details

This project consist in a mock API created with [json-server](https://github.com/typicode/json-server) and [deployed to Vercel](https://prova-tecnica-parlem.vercel.app/) using Serverless Functions. The mocked data is stored in [db.json](./api/db.json)

The client is a Vite+Vue app. It uses Vue Router to generate dynamic routes. Functionality was prioritized over visual appearance during the development of this project, so very basic styles are included using plain CSS.

## Usage and features

### API

This project consumes three routes from the Json-server API to retrieve all customers data, a single customer by the ID and all the products for a client.

- /customers

- /customers/:id

- /products/:id

### CLIENT

The client app includes two views:

- Home view, which includes a list of all existing customers
<div align='center'>
<img src='./client/public/Screenshot 2024-05-16 at 01.31.02.png' alt='Home view screenshot' width='600'/>
</div>

- Customer view, which includes customer details and a list of all the contracted products for a client

<div align='center'>
<img src='./client/public/Screenshot 2024-05-16 at 01.31.14.png' alt='Home view screenshot' width='600'/>
</div>

#### Filter customers

Users can filter customers using a text input in the Home view and see in the UI only the ones with matching values in their names, last names, phone number, IDs or emails.

<div align='center'>
<img src='./client/public/Screenshot 2024-05-16 at 01.31.28.png' alt='Home view screenshot' width='600'/>
</div>

#### Order customers

Customer data can be also order by some properties such as name, last name or ID.

<div align='center'>
<img src='./client/public/Screenshot 2024-05-16 at 03.19.56.png' alt='Home view screenshot' width='600'/>
</div>

## Project set up

To set up this project locally:

- clone this repo: `git clone`
- navigate to the api folder `cd api`
- `npm install` to install dependencies
- `npm start` to start the local server at localhost:3000
- navigate to the client folder `cd ..` and `cd client`
- `npm install` to install client dependencies
- `npm run dev` to start the client server in port 5173

## Further Improvements

Styles are kept minimalistic in this project, the use of html tables is something that can be revisited to achieve a nicer look.

There are some helper methods in the Home view that could also be extracted to a new file to keep the view cleaner and avoid having so much logic in it.

If the project is meant to grow and include more data, it might be a good idea to include a Pinia store to handle the data.
