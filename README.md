# Intro

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" width="40"  style="background-color:#ffffff;border-radius:25%;padding:5px" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" height="40" width="40" alt="django logo"  style="background-color:#ffffff;border-radius:25%;padding:5px" alt="django logo"/>
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" width="40"  style="background-color:#ffffff;border-radius:25%;padding:5px" alt="postgresql logo"  />
</div>

###


In this project, I've tried to maintain `DRY` and clean code as much as possible. Created `Highly Re-usable Components` on the FrontEnd/NextJS, on the other hand, used `Class-Based Views` on BackEnd/DRF. Tried to avoid additional packages or library as much as possible, since I'm using Two Frameworks, one on the FrontEnd and another on the BackEnd 😅. Used their native solutions to implement necessary features.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).    

## Resources

| Name         | Link                                                                                                                |
|-------------------|---------------------------------------------------------------------------------------------------------------------|
| FrontEnd Repo     | **[GitHub ↗ ](https://github.com/foy4748/phitron-django-005-frontend)**
| BackEnd Repo      | **[GitHub ↗ ](https://github.com/foy4748/phitron-django-005)**
| Requirements      | **[Notion ↗ ](https://screeching-plough-4fd.notion.site/Final-Assignment-sdt-assignment-05-1390adbafc6c80b0a057cee72b3419b3?pvs=4)**
| API Documentation | **[POSTMAN ↗ ](https://documenter.getpostman.com/view/14857923/2sAYBbf9su)**

## Getting Started
After cloning this repo, first, navigate to project root folder using command line. 

```bash
cd phitron-django-005-frontend
```

Install the necessary packages by running:

```bash
pnpm install
```

This project uses `pnpm` as package manager

Then, run the development server:

```bash
pnpm dev
```
```bash
# or
yarn dev
```
```bash
# or
npm run dev
```
```bash
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test Credentials

**Already set as default values on Login Form**

```json
{
    "username":  "test",
    "password":  "TestTest$1"
}
```

## API Documentation
- **[POSTMAN Document Page ↗](https://documenter.getpostman.com/view/14857923/2sAYBbf9su)**

## Environment Variables [ Example ]

You may start by copying the `env.example` file into `.env.local` file. Content of `env.example` file

```
SERVER_ADDRESS=http://localhost:3001
NEXT_PUBLIC_SERVER_ADDRESS=http://localhost:3001
NEXTAUTH_URL=http://localhost:3000

# Production
# SERVER_ADDRESS=https://phitron-sdt-assignment-05.vercel.app
# NEXT_PUBLIC_SERVER_ADDRESS=https://phitron-sdt-assignment-05.vercel.app
# NEXTAUTH_URL=https://phitron-sdt-assignment-05-frontend.vercel.app

NEXTAUTH_SECRET=TEST_SECRET
IMG_BB_KEY=img_bb_secret_key
```

## Technologies

### FrontEnd
- NextJS (TypeScript)
- NextAuth
- TailwindCSS
- ShadCN
- React Hook Form
- Zod
- SSLCommerze (Payment Gateway)

#### Strategies
- Used NextJS built-in `fetch` function to perform network requests to Django to utilize the native `Caching System` of NextJS
- Most of the components are `Server Component`. Kept the number of `Client Component` as minimum as possible.
- Most of the data fetching is done using `Server Actions`.
- Re-used `CREATE` forms for `UPDATE` as well.
- `ProductPagination` and `ProductSearch` form are highly re-usable components. These are used on `ListView` pages such as - Product List Pages for Any User, or User/Admin dashboard.
- Used `NextAuth` to handle Authentication as well as Authorization using the `middleware.ts` file.

### BackEnd
- Django (Python)
- Django Rest Framework (DRF)
- PostgreSQL (on Vercel/NeonDB)
- SSLCommerze-Lib (Payment Gateway)

#### Strategies
- Used `Class-Based Views` as much as possible to write simple CRUD API endpoints
- Utilized Built-in solutions in Django REST Framework (aka DRF) for - Pagination, Search and Filter functionalites for Product.
- Wrote a Python script in the `scripts/populate_product_data.py` file to generate `Test Random Product` data to populate the Database to check whether everyting works or not.
- Used `Transaction & Rollback` to handle product purchase, since it performs delete operations on the `CartItem` and inserts data in the `PurchasedItem` model, as well as creates a `Transaction` model instance to keep the payment record.

### Deployments
- FrontEnd - **[Vercel ↗ ](https://phitron-sdt-assignment-05.vercel-frontend.app)**
- BackEnd - **[Vercel ↗ ](https://phitron-sdt-assignment-05.vercel.app)**

### Deployment Guide

Just run the command below to deploy the app on vercel
```bash
vercel --prod
```
