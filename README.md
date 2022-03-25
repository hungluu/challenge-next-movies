Vue Map Challenge (challenge-vue-map)
=====
Movie listing app built with NextJS SSR

**Table of Contents**
* [Technologies](#technologies)
* [Previews](#previews)
* [Development](#development)
  + [Setup local](#setup-local)
  + [Start development](#start-development)
  + [Folder structure](#folder-structure)
  + [Customize configuration](#customize-configuration)
* [Deployment](#deployment)
  + [Build production](#build-production)
  + [Deploy to vercel](#deploy-to-vercel)
* [Contribution](#contribution)

Technologies
-----
- [NextJS](https://nextjs.org) server-side rendering
- [React 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [Styled components](https://styled-components.com)

Previews
----
A demo website can be accessed at https://challenge-next-movies.vercel.app (Tested with Chrome on laptop and phone)

Here are some screenshots

<table border="0">
 <tr>
    <td>
      <img width="332" alt="image" src="https://user-images.githubusercontent.com/13363340/160099637-35bc96f0-da51-491a-8256-ea671e2ad4ff.png">
    </td>
    <td>
    <img width="328" alt="image" src="https://user-images.githubusercontent.com/13363340/160099543-44173759-c866-4f7b-81c2-ffa7dd175f07.png"> 
   </td>
    <td>
      <img width="335" alt="image" src="https://user-images.githubusercontent.com/13363340/160099825-e65e2cd9-7b70-4934-891c-41165ed7c1e6.png">
   </td>
 </tr>
 <tr>
  <td align="center">
    Movies listed in carousel
  </td>
  <td align="center">
    Select movie to view details
  </td>
  <td align="center">
    Click on genre or select dropdown to filter movies
  </td>
 </tr>
</table>


Development
----
### Setup local

- Please run this command to install required dependencies
  ```
  yarn
  ```
### Start development

This command will start a quasar development server, which will also watch your file changes to live-reload
```
yarn dev
```

You can preview your changes at http://localhost:3000

### Folder structure

Here is basic structure of source folder, which I regrouped some components from quasar's default boilerplate for ease of maintenance in a modular way:

```
src
 |- app
     |- services    // Services
     |- movies     // Movie components
 |- pages    // pages
 |- ...
```
### Customize configuration

See [Configuring next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction).

Deployment
----
### Build production

For a production-ready build of the application, please use this command:
```
yarn build
```

### Deploy to vercel 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hungluu/challenge-next-movies)

Contribution
-----
All contributions are welcomed. Feel free to clone this project, make changes that your feel necessary and pull request anytime you want.


🍻 Cheers.
