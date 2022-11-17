const element = React.createElement(
  'h1', // type
  {
    className: 'title',
    onClick: () => { console.log('clicked'); },
    style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)' }
  }, // props
  'Hello World!' // children
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

ReactDOM.render(
  element,
  document.getElementById('root2')
);

document.querySelectorAll('.button')
  .forEach(domContainer => {
    const messageId = parseInt(domContainer.dataset.messageId);

    ReactDOM.render(
      React.createElement(
        'button',
        {
          onClick: () => { console.log(`liked message: ${messageId}`); }
        },
        'Like'
      ),
      domContainer
    )
  });