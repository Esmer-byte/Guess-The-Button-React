var card = [], card1 = [];
var buttonId = 1, RandomNumber, n;
var button = (
  <button onClick = {Generate}>
    Start Game
  </button>
);

function Generate () {
  this.RandomNumber = Math.floor(Math.random() * n) + 1;
  while (n != 0) {
      card.push(
       <div>
        <Button id = {buttonId} name = "?"/>
       </div>
      );
      n--;
    buttonId++;
  }  
  ReactDOM.render(card, document.querySelector('#app'));
}

function Button (props) {
  return (
    <button class = "person" onClick = { 
        function() {
            if(props.id == this.RandomNumber) {
              alert("Winner winner chicken dinner");
            } else {
              alert("Loser, Loser, Nyquil Boozer");
            }
        }
      }>
      <h1>{props.id}</h1>
    </button>
  );
}

function App () {
  function handleChange (e) {
    n = e.target.value;
  }
  return (
    <input name = "firstName" onChange = {handleChange} />
  ); 
}
card1.push(App());
card1.push(button);
ReactDOM.render(card1, document.querySelector('#start'));

