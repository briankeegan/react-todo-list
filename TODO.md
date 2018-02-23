### Steps to take

#### Install and start
-  `npx create-react-app todo`
-  `cd todo`
-  `npm start`

#### Remove 'extra' code
  Remove code from: `App.js`

Leave registerServiceWorker.
Though it shouldn't matter for this example.
More [info](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker)
and then this [rando](https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js)


#### All work is done in `./src`
 But mostly in `App.js`, `index.js` and anthing else we create.


 #### Quick jsx over view
 -  JavaScript XML
 -  Syntacial sugar to add HTML syntax to js.  You don't need it, but it seems to make things easier to read.
 -  It might look like html, but it's js.
 - Use camelCase and js names for attributes, so `className` instead of `class`.
 -  Pass variables with `{}`, or class={myVar}, more on that later
####  Functional and Class Components

We'll be working with Class Compenents
They main difference is the Class Component have the advantage of being the child of React's Compenent Class thorugh extend.  This allows it extra properties, most importantly for our purposes `state`.
Using Functional Classes has slightly different Syntax.

```js
function Greet(props) {
  return <h1>What is up, {props.name}</h1>;
}
```

```js
class Greet extends React.Component {
  render() {
    return <h1>What is going down, {this.props.name}</h1>;
  }
}
```

We'll get to props, but for now, just notice the syntacial difference.

** Why would one be preffered about the other?

Want to know [more?](https://reactjs.org/docs/components-and-props.html)

####  Create sample layout of what we want
 - Render header
 - toDO items, we'll use an unordered list.

### Adding variables with props
-  Replace the name and listItems in the `App.js`
-  Create an object to hold those values
-  Pass those into the Component in `index.js`
