# Prova technical parlem

This repo is a solution for technical test that involves creating a fake API with a record of clients and products and a client app that display the API data in two views and allow some filter and order operations.

Visit the project at:

---

### Contents

- [Project details](#project-details)
- [Usage: Current features](#features)
- [Quick start: How to set up this project](#set-up)
- [Improvements: Next features](#improvements)

---

## Project details

This project involves a

## Usage: Current features

The Json-server API provides three routes to get the data displayed by the client.

- /customers

- /customers/:id

- /products/:id

The API is deployed to vercel in this link

The client is a Vite+Vue app. It includes two views:

- A list of all customers
- Single customer with details and contracted products

### Filter customers

The home view allows users to filter customers using a text input to display only the ones with matching values in their names, lastnames, phone number, IDs or emails.

Users can filter items using the input at the top.
<br/>

<div align='center'>
<img src='./public/img/items-filter.png' alt='List view, filter input contains the text "ch" and only matching items are shown' width='600'/>
</div>
 and also order the customers by name, lastName or ID.

## Quick start: How to set up this project

To set up this project locally:

- clone this repo: `git clone`
- navigate to the api folder `cd api`
- `npm install` to install dependencies
- `npm start` to start the local server at localhost:3000
- navigate to the client folder `cd ..` and `cd client`
- `npm install` to install client dependencies
- `npm run dev` to start the client server in port 5173

### Mark items as purchased

Once in the List view, users can interact with the items in the list. Each time a user buy the item, them mark it as purchased in the list. Over time, the app comes to understand the intervals at which users buy different items, and if an item is likely to be due to be bought soon, it rises to the top of the shopping list.
<br/>

<div align='center'>
<img src='./public/img/items.png' alt='List view, filter input is empty and all list items are shown' width='600'/>
</div>

<div align='center'>
<img src='./public/img/manage-list.png' alt='Manage List view, displaying a first form to add items and a second one to share the list.' width='600'/>
</div>

## Improvements: Next features

Contributions to this project are appreciated. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.
