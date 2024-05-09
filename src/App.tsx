import banner from "./assets/images/image-omelette.jpeg";
const App = () => {
  return (
    <>
      <section className="bg-Dark-Charcoal flex align-middle justify-center ">
        <div className="sm:w-2/5 bg-white">
          <img src={banner} />
          <div className="p-7">
            <h1 className="font-young-serif text-3xl font-bold">
              Simple Omelette Recipe
            </h1>
            <p className="pt-5 pb-5 text-Wenge-Brown font-outfit">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="bg-Rose-White p-5 rounded-md">
              <h2 className="text-Dark-Raspberry text-lg font-outfit font-bold">
                Preparation time
              </h2>
              <ul className="custom-list p-4 text-sm font-outfit text-Wenge-Brown">
                <li className="pb-2">
                  <span className="font-bold">Total:</span> Approximately 10
                  minutes
                </li>
                <li className="pb-2">
                  <span className="font-bold">Preparation: </span>5 minutes
                </li>
                <li>
                  <span className="font-bold">Cooking: </span>5 minutes
                </li>
              </ul>
            </div>
            <h2 className="font-young-serif text-2xl text-Nutmeg font-bold pt-5">
              Ingredients
            </h2>
            <ul className="ml-2  custom-list2 font-outfit text-Wenge-Brown text-sm">
              <li className="pt-2">2-3 large eggs</li>
              <li className="pt-2">Salt, to taste</li>
              <li className="pt-2">Pepper, to taste</li>
              <li className="pt-2 pb-2">1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>

            <h3 className="font-young-serif text-2xl text-Nutmeg font-bold pt-5">
              Instruction
            </h3>
            <ol className="custom-ordered-list font-outfit text-sm pt-5 text-Wenge-Brown">
              <li>
                <span className="font-bold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <span className="font-bold">Heat the pan: </span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="font-bold">Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="font-bold">Add fillings(optional): </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li>
                <span className="font-bold">Fold and serve:</span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li>
                <span className="font-bold">Enjoy:</span>Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
            <h3 className="font-young-serif text-2xl text-Nutmeg font-bold pt-5">
              Nutrition
            </h3>
            <p className="text-Wenge-Brown text-sm font-outfit pt-2 pb-5">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="font-outfit text-Wenge-Brown ml-5">
              <tr className="border-b border-grey-200">
                <td>Calories</td>
                <td className="px-10 py-2 text-Nutmeg font-bold">277kcal</td>
              </tr>
              <tr className="border-b border-grey-200">
                <td>Carbs</td>
                <td className="px-10 py-2 text-Nutmeg font-bold">0g</td>
              </tr>
              <tr className="border-b border-grey-200">
                <td>Protein</td>
                <td className="px-10 py-2 text-Nutmeg font-bold">20g</td>
              </tr>
              <tr className="border-b border-grey-200">
                <td>Fat</td>
                <td className="px-10 py-2 text-Nutmeg font-bold">22g</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
