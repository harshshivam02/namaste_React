const parent =React.createElement(
    'div',
   { id:"parent"},
    
   [ React.createElement(
        'div',
        {id:"child"},
       [ React.createElement('h1',null,'Hello World'),
         React.createElement('h2',null,'Hello World')
       ]
    ),
    React.createElement(
        'div',
        {id:"child"},
       [ React.createElement('h1',null,'Hello World'),
         React.createElement('h2',null,'Hello World')
       ]
    )
]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 