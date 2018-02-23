### Steps to take

### To see step by step...
Follow along on the demo branch

### Intial

-  clone and fork
- `npm install`

##  OR

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
-  Pass the object's properties into the Component in `index.js`

### Make modular by using Item Component
-  Create Item component
-  Copy content from App.js, and update (rename and clear)
- Import Item with `import Item from './Item'`
-  Update `App.js` to use imported Component

### Use for loop to add all items

-  In `App.js.`'s render, but above the ruturn, create `const todoItemsArray`
- map over `this.props.todoItems` using Items Component
- Replace previous `<Item />` with `{todoItemsArray}`
- Note, we add a key.  Learn more about why they are important [here](https://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/) or [here](https://reactjs.org/docs/lists-and-keys.html)
- Add an item to `myTodo.items` in `index.js`.  Pretty cool.

### Setting state to toggle class for checkoff

-  In `Items.js`, above `render` add [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor), and pass in props
-  invoke the super
-  assign `state` the property active to false.
- Below lets create a method `toggleClass`
- All it does is toggle the value of the state
- Next add an `onClick` (NOT `onclick`) to li which invokes the toggleClass method. `onClick={e => this.toggleClass()}`
- Next, lets get the state involved.
- We'll add a ternary asignment to `className`
- If `state.active` is true, it'll add the class `checked`, otherwise we'll set it to null -- which will remove class from the element altogether.
- `className={this.state.active ? 'checked' : null }>{this.props.item}`

##### Notes on states, props, classes.
-  By calling super, we continue to get all benefits/methods of Reacts Component. That's why we imported it.
- `this.state` is an object, and can have as many key value pairs as you want to use.
- Do not try to manually change state outside of the constructor, example `this.state.active = true`
- Instead change with `this.setState`
- props, are read only. If you want to change something small, change the state of it.
- You can pass assign a prop's value to a state, but we'll get to that later (time permitting!).
- Also, we're passing in props, into constructor and e into toggleClass for conventions sake.  Will work without, but pass them in case we need it later, don't want to be looking!

###  Make todoItemsArray mutable

We'll do this by making the creating a state version of it.
-  Create construcor, passing in `props`
-  invoke super
-  declare state as an object with the property `todoItems` assigned to `props.todoItems`
- in the map iteration, change `props` to `state`

### Make input mutable

-  Add newItem to state object
-  On the inputs value to that state, `this.state.newItem`
-  Create method `newItemChange`, which changes the state of the newItem to the current item.
- set the value of the input to `this.state.newItem`
- add change event listener, and use `newItemChange` method

### Create form to add new items
-  Create form, with one text input
- Create `addItem`, which is invoked on `onSubmit`
- preventDefault, copy `this.state.todoItems` onto obj
- add `newItem` to obj
- Change state of todoItems to new obj, and reset newItems state to an empty string

### Add remove all items button
-  Create method which resets state of todoItems to empty string
- Create button, and add click event

### Add reset to orginal state button
-  Create method which resets state of todoItems to array supplied in `index.js`
- Add const todo, to hold and pass value of props
- Create button, and add click event

##### Notes
-  Confused by functionality of button
