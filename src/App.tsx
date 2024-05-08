import banner from "./assets/images/image-omelette.jpeg";
const App = () => {
  return (
    <>
      <section className="">
        <div className="">
          <img src={banner} />

          <h1 className="font-outfit font-regular">Simple Omelette Recipe</h1>
          <p>An easy and quick dish, perfect for any meal.</p>
          <div className="">
            This classic omelette combines beaten eggs cooked to perfection,
            optionally filled with your choice of cheese, vegetables, or meats.
          </div>
          <h2>Preparation time</h2>
          <ul>
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
          </ul>

          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <h3>Instruction</h3>
          <ol>
            <li>
              <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan: </span> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette:</span> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings(optional)</span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
          </ol>
          <li>
            <span>Fold and serve:</span>
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </li>
          <li>
            <span>Enjoy:</span>Serve hot, with additional salt and pepper if
            needed.
          </li>

          <h3>Nutrition</h3>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tr className="border-b border-grey-200">
              <td>Calories</td>
              <td>277kcal</td>
            </tr>
            <tr className="border-b border-grey-200">
              <td>Carbs</td>
              <td>0g</td>
            </tr>
            <tr className="border-b border-grey-200">
              <td>Protein</td>
              <td>20g</td>
            </tr>
            <tr className="border-b border-grey-200">
              <td>Fat</td>
              <td>22g</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default App;
