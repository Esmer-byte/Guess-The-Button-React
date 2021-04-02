var card = [], card1 = [], n;
var id1 = 1;
var RandomNumber;
var button = (
  <button onClick = {Generate}>
    Start Game
  </button>
);

function Person (props) {
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

function Generate () {
  this.RandomNumber = Math.floor(Math.random() * n) + 1;
  while (n != 0) {
      card.push(
       <div>
        <Person id = {id1} name = "?"/>
       </div>
      );
      n--;
    id1++;
  }  
  ReactDOM.render(card, document.querySelector('#app'));
}
ReactDOM.render(card1, document.querySelector('#start'));

