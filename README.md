# Dog-o-Rama

a static website built with Gatsby and Contentful, initially created from [Gatsby Contentful Starter](https://github.com/gatsbyjs/gatsby-starter-contentful-homepage-ts)

The design system is using vanilla-extract and its theming ability along with `globalStyles` and multiple `styleVariants`. This has setup an easy way to add onto the system by reusing what is available and creating scoped styles as needed.

## Setup

_After cloning the repo follow the steps below_

- Add Contentful API Keys
  - You can run the setup script `npm run setup`
  - Or add them to a `.env.development` file
- run `npm i && npm run develop`

## File Structure

```sh
src
├── components
│   ├── common
│   └── sections
│       ├── 404_page
│       ├── dog_breed_page
│       └── home_page
├── pages
│   ├── index.tsx
│   ├── 404.tsx
│   └── breed
│       └── {ContentfulDogBreeds.slug}.tsx
├── styles
│   ├── color.css.ts
│   ├── gobal-styles.css.ts
│   ├── global-theme-contract.ts
│   └── global-theme.css.ts
└── utils
```

This structure will allow the project to remain tidy and with the ability to scale when adding a new page or section to a page.

the `common` folder is where all "common" components live. These are components that are meant to be used across the entire application.

the `sections` directory is designed to contain the sections of each page stored in a `*_page` directory. By organizing the files in this way we can export all sections for a page from a single location which will allow us to loop over that in the code and automatically add content to the page when a new section needs to be added. It also creates an intuitive way to find various sections of a page.

_If we see a section is being used for multiple pages it should be moved into the `common` directory._

the `styles` directory is for global styles **only**. If you need to add styles for a section or a common component you should create a file next to the component in either the `sections` or `common` directory.

the `utils` directory is for reusable utilities that are provide added functionality to tha application that should be easily shared across the application.

## TODO

There is still a good amount of work I would like to do if I had more time.

- [ ] Add working example of page sections pattern
- [ ] Add unit tests, setup jest
- [ ] Add snapshot testing, possibly storybook
- [ ] Add scalable navigation
- [ ] Extend the design system
- [ ] Add better Accessability
- [ ] Add GraphQL abstractions
- [ ] Add vscode dev container or Docker setup
- [ ] Add static image hosting (Maybe :thinking:)
- [ ] Add better images and size variations
- [ ] Update contentful models and content
- [ ] Add GitHub workflows
