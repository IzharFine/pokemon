import { handleEvolvesTo } from "../adapters/pokemonDataAdapter";

test("handleEvolvesTo - Send chain with key from the model - Set into name all the chain evolves", () => {
  // Arrange
  let pokemonCardsModel = {
      Izhar: {}
  };

  let chain = {
      evolves_to: [
        {
          evolves_to: [
            {
              evolves_to: [],
              species: {
                name: "Moshe"
              }
            }
          ],
          species: {
            name: "Yakir"
          }
        }
      ],
      species: {
        name: "Izhar"
      }
    };

  // Act
  handleEvolvesTo(chain, pokemonCardsModel);

  // Assert
  expect(pokemonCardsModel["Izhar"].evolveChain).toEqual(["Izhar", "Yakir", "Moshe"]);
});

test("handleEvolvesTo - Send chain without key from the model - Dont set anything", () => {
    // Arrange
    let pokemonCardsModel = {
        Adam: {}
    };
  
    let chain = {
        evolves_to: [
          {
            evolves_to: [
              {
                evolves_to: [],
                species: {
                  name: "Moshe"
                }
              }
            ],
            species: {
              name: "Yakir"
            }
          }
        ],
        species: {
          name: "Izhar"
        }
      };
  
    // Act
    handleEvolvesTo(chain, pokemonCardsModel);
  
    // Assert
    expect(pokemonCardsModel["Adam"]).toEqual({});
  });