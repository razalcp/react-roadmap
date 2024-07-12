/*
<div id="parent">
    <div id="child">
        <h1> </h1>
        <h2> </h2>
   </div>
      <div id="child2">
        <h1> </h1>
        <h2> </h2>
   </div>
</div>
*/

const parent2=React.createElement('div',{id:'parent'},
              [React.createElement('div',{id:'child'},
                [React.createElement('h1',{},'hi 1'),React.createElement('h2',{},"hello 1")]
              ),React.createElement('div',{id:'child2'},
                [React.createElement('h1',{},'hi 2'),React.createElement("h2",{},"hello 2")]
              )]
)


// const parent = React.createElement('div', { id: "parent" }, 
//     React.createElement('div', { id: 'child' },
//         [React.createElement('h1', {}, "hi im nested element"),
//         React.createElement('h2',{},"Im h2 tag")]))






// console.log(parent);
// const heading = React.createElement(
//     'h1',
//     { id: "heading", xyz: "abc" },
//     "hi React"
// )
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
// root.render(parent)
console.log(root);
root.render(parent2)