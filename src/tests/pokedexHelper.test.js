import { getEvolvedFromData, getEvolveToData } from "../helpers/pokedexHelper";

test("getEvolvedFromData - Send name from middle - Get names before", () => {
  // Arrange
  let evolveChain = ["Izhar", "Adam", "Moshe", "Yakir"];
  let nameInChain = "Moshe";

  // Act
  let result = getEvolvedFromData(evolveChain, nameInChain);

  // Assert
  expect(result).toEqual(["Izhar", "Adam"]);
});

test("getEvolvedFromData - Send name in the start - Get none", () => {
  // Arrange
  let evolveChain = ["Izhar", "Adam", "Moshe", "Yakir"];
  let nameInChain = "Izhar";

  // Act
  let result = getEvolvedFromData(evolveChain, nameInChain);

  // Assert
  expect(result).toEqual([]);
});

test("getEvolveToData - Send name in the start - Get all after", () => {
  // Arrange
  let evolveChain = ["Izhar", "Adam", "Moshe", "Yakir"];
  let nameInChain = "Izhar";

  // Act
  let result = getEvolveToData(evolveChain, nameInChain);

  // Assert
  expect(result).toEqual(["Adam", "Moshe", "Yakir"]);
});

test("getEvolveToData - Send name in the end - Get none", () => {
  // Arrange
  let evolveChain = ["Izhar", "Adam", "Moshe", "Yakir"];
  let nameInChain = "Yakir";

  // Act
  let result = getEvolveToData(evolveChain, nameInChain);

  // Assert
  expect(result).toEqual([]);
});
