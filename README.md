# Multi-language Portfolio

A portfolio template built using React where you can add any language you want and have dark and light theme.

## Preview

[See Live](https://adri-antanon.github.io/i18n-portfolio/)

## Instructions

### Setup

```shell
git clone https://github.com/Adri-Antanon/i18n-portfolio.git
cd i18n-portfolio
```

Or just use the "Use this template" button on GitHub.

```shell
npm install
npm start
```

To modify the language options go to src/context/i18nContext.js and add the language what you want:

```js
  const i18nReducer = (state, action) => {
  // In case of adding new languages
  switch (action.type) {
    case 'es': {
      return { language: action.type };
    }
    case 'en': {
      return { language: action.type };
    }
    case 'EXAMPLE': {
      return { language: action.type };
    }
    default: {
      return state;
    }
  }
};
```

You can add your personal data inside src/i18n.

### How to use
- Open `public/index.html` and replace -

`<title>Max Dev - Example Portfolio</title>` with `<title>Your Portfolio name</title>`.

- Change the information for yours inside the i18n folder

### Deployment
I highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React,  you should host your website online for free.

### Technologies 
 A simple combination of React + CSS.

### Thanks
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

If you like this portfolio template don't forget give it a ⭐.