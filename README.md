## Maia Project - cleint screens Front-End

## Getting Started

1. Make sure you have a running server site on wordperss with the maia-client-wp, and add it to .env.local buy copy the .env.local.example file
1. Then, run the development server:

```bash
npm run insatll
```
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

- Must of the pages are route locked based on the Token Cookie. You should log in or make sure you have the currect cookie
- 

## Lint and CI/CD
There is a github action that run `build`and `lint`command just to make sure everything is in place. Make sure you follow all the EsLint rules.

## API's

1. The app API is only calling the the [maia-client-wp](https://github.com/nemo369/maia-client-next) endpoints using the [..proxy].js file.
1. [veritas](http://api.veritas-hr.com/)

## Design

1. We are heavily relaying on [TailwindCSS](https://tailwindcss.com/) for the most part
1. [invisionapp](https://projects.invisionapp.com/share/QX10FG7U9BYC#/screens/449548564)

## Tech Stack
1. This is a [NextJS](https://nextjs.org/) app -> The React Framework for Production

1 . For *state management* there is a lightwight `useReucer` that wraps the apps with `useContext` and passing data like the current user.
1. Axios for making API's call

## Translation
We use `next-i18next` as trnasltion between hebrew male (HEM) and hebrew female (for the most part). make sure toi wrapp your string with the `t` function from `useTranslation`.
After that, run 
```bash
translations-scan
```

To add it to the common.js transaltions files in the public directory.