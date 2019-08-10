export const posts = [
    {
      id: 22,
      title: "Welcome to React",
      body: `React makes it painless to create interactive UIs.
        Design simple views for each state in your application,
        and React will efficiently update and render just the
        right components when your data changes.
        Declarative views make your code more predictable and easier to debug.`
    },
    {
      id: 23,
      title: "An Introduction to React Router",
      body: `There are three types of components in React Router:
            router components, route matching components, and navigation components.
            All of the components that you use in a web application should be
            imported from react-router-dom.`
    },
    {
      id: 24,
      title: "Welcome to Redux",
      body: `It helps you write applications that behave consistently,
            run in different environments (client, server, and native), and are easy to test.
            On top of that, it provides a great developer experience, such as live code editing
            combined with a time traveling debugger.`
    }
  ];
  
  export const recommendedPosts = [
    {
      id: 30,
      title: "Angular",
      body: `Learn one way to build applications with Angular and reuse your code
            and abilities to build apps for any deployment target.
            For web, mobile web, native mobile and native desktop.`
    },
    {
      id: 31,
      title: "Ember.js",
      body: `Ember.js is built for productivity. Designed with developer ergonomics in mind,
            its friendly APIs help you get your job done—fast.`
    },
    {
      id: 32,
      title: "Backbone.js",
      body: `Backbone.js gives structure to web applications by providing models with
            key-value binding and custom events, collections with a rich API of 
            enumerable functions, views with declarative event handling, and connects 
            it all to your existing API over a RESTful JSON interface.`
    }
  ];
  
  export const allPosts = posts.concat(recommendedPosts);