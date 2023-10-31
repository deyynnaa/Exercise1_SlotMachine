class App extends React.Component {
  render() {
    return (
      <div class="container design">
        <Title />
        <Fruits />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root")); //root comes form the html
