class Fruits extends React.Component {
  getRandomElementsFromArray(array, count) {
    const shuffledArray = array.slice();
    const randomElements = [];

    while (randomElements.length < count) {
      const randomIndex = Math.floor(Math.random() * shuffledArray.length);
      randomElements.push(shuffledArray.splice(randomIndex, 1)[0]);
    }

    return randomElements;
  }

  render() {
    const images = ["🍊", "🍒", "🍊", "🍊", "🍒", "🍊"];
    const randomFruits = this.getRandomElementsFromArray(images, 3);
    let winner =
      randomFruits[0] === randomFruits[1] &&
      randomFruits[1] === randomFruits[2];
    return (
      <div class="design">
        {randomFruits.map((fruit, index) => (
          <span key={index}>{fruit}</span>
        ))}
        <br />
        <p>{winner ? "Winner" : "Loser"}</p>
      </div>
    );
  }
}
