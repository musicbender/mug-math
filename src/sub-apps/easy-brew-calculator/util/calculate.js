export default (state, updatedBlock, input) => {
  const isStrength = updatedBlock === "strength";
  const str = isStrength ? input : state.strength;
  const vol = isStrength ? state.volume : input;

  const getCoffee = () => {
    const output = 2.7 * vol + ((0.1 * vol) * (str - 3));
    return Math.round(output * 10) / 10;
  }

  const getWater = () => {
    const output = 8 * vol;
    return Math.round(output * 10) / 10;
  }

  return {
    coffee: getCoffee(),
    water: getWater(),
  }
}
