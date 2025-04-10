const recipes = [
    { 
        id: 1, name: 'Vegan Pancakes', category: 'American', servings: 6, 
        ingredients: ['3 cups all purpose flour', '2 tablespoon baking powder', '1 teaspoon salt', '4 tablespoons granulated sugar',
        '2 cup soy milk *or use almond, oat or coconut milk', '1 cup water','4 tablespoons canola oil *may omit for oil free'], 
        instructions: ['In a large bowl, whisk together the flour, baking powder, salt and sugar.',
        `Pour the milk, water and oil into the bowl with the dry ingredients, and stir with a large spoon until just combined. A few lumps are okay; do not over mix or your pancakes won't be as fluffy.`,
        'Heat a large griddle or pan over medium-high heat. Grease the pan with vegan butter or coconut oil, and drop about 1/3 cup of the batter onto it. Cook until bubbles form, then flip and cook until golden brown on the other side, about 1-2 minutes. Repeat with all the remaining batter.',
        'Serve with vegan butter, pure maple syrup.'],
        credit: ''
    },
    {  
        id: 2, name: 'BBQ Pulled Pork Sandwiches', category: 'American', servings: 2, 
        ingredients: ['1 medium carrot','1 medium red onion','1 clove garlic','Oil for frying','3 tbsp. tomato paste',
        '1 tsp. paprika powder','1 tsp. thyme','1 (14-oz.) can jackfruit, drained','1 tbsp. flour','1/2 cup vegetable broth','3 tbsp. soy sauce',
        'Salt and pepper, to taste','1 cup mixed white cabbage, red cabbage, and carrot, grated','2 tbsp. vegan mayonnaise','2 burger buns'], 
        instructions: ['Place the jackfruit in a strainer and drain well.','Finely chop the carrot, onion, and garlic. Heat oil in a pan and fry until softened.',
        'Mix in the tomato paste, paprika, thyme, and jackfruit. Stir well to coat.',
        'Stir in the flour, then pour in the vegetable broth and soy sauce.','Let the mixture simmer for 10 minutes, stirring occasionally. Season with salt and pepper to taste.',
        'Grate the white cabbage, red cabbage, and carrot. Mix with vegan mayonnaise.',
        'Layer burger buns with the jackfruit mixture and cabbage slaw.','Serve immediately and dig in!'],
        credit: ''
    },
    {
       id: 3, name: 'Crispy Sesame Tofu', category: 'Asian', servings: 6,
       ingredients: ['For Tofu:','2 (16 ounce) blocks firm or extra-firm tofu','2 teaspoons sesame oil','2 tablespoons low sodium soy sauce','2 tablespoons cornstarch', 
        'For Sesame Sauce:', '1/2 cup low sodium soy sauce','3 cloves garlic, minced','1/4 cup agave, maple syrup or brown sugar','1/4 cup seasoned rice vinegar','1-2 teaspoons Sriracha hot sauce, more or less to taste',
        '2 tablespoons cornstarch','1/4 cup water','1 tablespoon sesame oil',
        'For Serving:', '4 cups cooked rice', 'sesame seeds',
       ],
       instructions: ['Press the tofu: Wrap each block of tofu in paper towels. Place a plate or pan on top of the wrapped tofu, and put a couple of heavy books on top of that. Let the tofu press for 20 minutes.',
        'Preheat the oven to 400 degrees F and lightly grease a large baking sheet with oil or line with parchment paper.',
        'Slice the pressed tofu into cubes, then add them to a large ziplock bag (or large bowl), along with the sesame oil, soy sauce and cornstarch. Close the bag, and shake gently to coat. Arrange the tofu evenly on the prepared pan, and bake for 25 minutes, or until golden and crispy.',
        'While the tofu bakes, cook your rice and make the sauce. In a large pan, add the soy sauce, garlic, agave, seasoned rice vinegar and Sriracha hot sauce. Stir and bring to a simmer over medium heat. In a small bowl, mix the cornstarch and water together until smooth, then pour into the pan. Stir constantly until the sauce thickens, then turn off the heat. Stir in the sesame oil.',
        'When the tofu is done baking, add it to the sauce and stir to coat the pieces. Serve with rice, sesame seeds. Serve and enjoy!'
       ],
       credit: ''
    },
    {
        id: 4, name: 'Black Bean and Sweet Potato Quesadillas', category: 'Mexican', servings: 4,
        ingredients: ['1 large sweet potato','1 cup of salsa','1 cup brown rice, cooked','1 cup fresh spinach','8 ounces vegetarian, no added oil, re-fried beans',
            '8 ounces black beans, drained and rinsed','¼ teaspoon onion powder','¼ teaspoon chili powder','¼ teaspoon cumin','1 jalapeño pepper, diced (optional)','6-8 whole-wheat tortillas'],
        instructions: ['Preheat oven to 375º F.  Prepare a sheet pan with parchment paper.','peel and quarter the sweet potatoes.',
            'Bake sweet potatoes in the oven for 45 minutes to one hour, until soft.','Remove sweet potatoes from oven and toss into a mixing bowl. Mash sweet potatoes with the salsa, rice and fresh spinach.',
            'Place sweet potato mash in a sauce pan and mix in black beans and refried beans, heating mixture thoroughly over medium heat. Add onion powder, chili powder and cumin to taste and stir.',
            'Place a tortilla in a frying pan on medium heat, and slather the side facing up with sweet potato and bean mixture. Add jalapeños if desired.',
            'Place another whole wheat tortilla on top.  Press down on top tortilla with spatula with pan on medium heat for about 3 minutes. Flip with spatula and cook for another three minutes.',
            'Serve topped with salsa.'
        ],
        credit: ''
    },
    {
        id: 5, name: 'Thai Vegetable Noodle Soup', category: 'Asian', servings: 4,
        ingredients: ['½ cup thinly sliced scallions','2 tablespoons Thai Spice Blend','4 cups low-sodium vegetable stock','1 cup 1-inch pieces green beans',
            '1 cup thinly sliced carrots','4 oz. dry brown rice noodles','1 cup snow peas, trimmed and halved crosswise','1 cup 1-inch broccoli florets','1 baby bok choy, cut into 1-inch pieces',
            '1 cup unsweetened, unflavored plant milk','3 tablespoons lime juice','⅛ teaspoon sea salt','4 to 6 fresh basil leaves, torn into pieces'],
        instructions: ['In a large saucepan combine scallions, Thai Spice Blend, and ¼ cup water. Cook over medium heat for 2 minutes.',
            'Add stock, green beans, and carrots. Bring to a boil, reduce heat.','Simmer, uncovered, 5 minutes.',
            'Add noodles, snow peas, broccoli, and bok choy. Simmer 5 to 7 minutes more or until noodles are cooked.',
            'Add milk, cook 1 minute. Stir in lime juice and salt.', 'Garnish with basil. Serve and enjoy!',
        ],
        credit: ''
    },
    {
        id: 6, name: 'Thai Green Curry Chickpeas with Spinach', category: 'Asian', servings: 3,
        ingredients: ['1 cup chopped onion','1 cup chopped red bell pepper','3 cloves garlic, minced','2 cups refrigerated unsweetened coconut milk',
            '2 tablespoons Thai green curry paste','¼ teaspoon red pepper flakes (optional)','2 15-oz. cans no-salt-added chickpeas, drained',
            '2 cups thinly sliced fresh spinach',
            '¼ cup chopped fresh cilantro','2 cups hot cooked brown rice'],
        instructions: ['In a large saucepan cook onion, bell pepper, and garlic over medium 3 to 4 minutes or until tender, stirring occasionally and adding water, 1 to 2 tablespoons at a time, as needed to prevent sticking.',
            'Stir in coconut milk, curry paste, and, if desired, crushed red pepper. Bring to a boil', 'Add garbanzo beans, return to boil.',
            'Stir in spinach and cilantro just until spinach has wilted.', 'Serve over rice.'
        ],
        credit: ''
    },
    {
        id: 7, name: 'Tempeh BBQ Sandwiches with Pineapple Slaw', category: 'American', servings: 4,
        ingredients: ['1 8-oz. package fresh button mushrooms, finely chopped','1 cup chopped onion','2 cloves garlic, minced','4 oz. tempeh, crumbled',
            '1 cup cooked wheat berries','1 14.5-oz. can no-salt-added diced tomatoes, undrained','½ cup low-sugar barbecue sauce','2 cups shredded red cabbage',
            '1 cup chopped fresh pineapple','¼ cup sliced scallions','2 tablespoons brown rice vinegar','4 100% whole wheat hamburger buns, toasted'],
        instructions: ['In a large skillet cook mushrooms, onion, and garlic over medium 5 to 8 minutes or until tender. Add tempeh and wheat berries, mix well. Stir in tomatoes and barbecue sauce. Reduce heat to low, simmer 5 to 8 minutes or until slightly thickened.',
            'Meanwhile, for slaw, in a medium bowl toss together cabbage, pineapple, scallions, and vinegar.','Spoon mushroom mixture on bun bottoms. Top with slaw and bun tops.'
        ],
        credit: ''
    },
    {
        id: 8, name: 'Mexican Chocolate Nice Cream', category: 'Mexican', servings: 4,
        ingredients: ['⅓ cup unsweetened cocoa powder','1 teaspoon ancho chile powder','½ teaspoon ground cinnamon','4 large frozen bananas, broken into pieces','1 teaspoon pure vanilla extract'],
        instructions: ['In a small bowl combine cocoa powder, ancho chile powder, and cinnamon. Whisk in ⅓ cup boiling water, let cool to room temperature.',
            'In a high-speed blender or food processor pulse banana pieces on low to medium-low until crumbly, stopping and scraping down sides once or twice. Add cocoa mixture and vanilla, blend continuously 30 seconds to 1 minute or until smooth and creamy, adding 1 to 2 Tbsp. cold water if needed.',
            'Serve immediately or transfer to a container and store in the freezer up to 1 week.'
        ],
        credit: ''
    },
    {
        id: 9, name: 'Vegan Strawberries and Cream', category: 'American', servings: 6,
        ingredients: ['1 16-oz. package strawberries, hulled','8 oz. firm silken tofu, drained','¾ cup pitted dates','2 tablespoons lemon zest','1 teaspoon pure vanilla extract','½ teaspoon ground cardamom'],
        instructions: ['For tofu cream, in a blender combine 1½ cups of the strawberries and the remaining ingredients. Blend until smooth, scraping down sides as needed.',
            'Quarter the remaining strawberries. Layer tofu cream and strawberries in 6 serving dishes. If desired, garnish with additional whole strawberries and lemon zest.',
        ],
        credit: ''
    },
    {
        id: 10, name: 'Vegan Chili', category: 'American', servings: 6,
        ingredients: ['1 1/2 tablespoons extra-virgin olive oil','2 cups diced sweet onion (about 1 medium/large)','2 tablespoons minced garlic (about 4 large cloves)','2 medium jalapeños, seeded and finely chopped',
            '1 cup finely chopped celery','1 large red bell pepper, seeded and diced','1 (28-ounce) can diced tomatoes, with juices','1 cup low-sodium vegetable broth','6 tablespoons tomato paste',
            '1 14-ounce can kidney beans, drained and rinsed','1 14-ounce can pinto or navy beans, drained and rinsed','2 tablespoons chili powder','2 teaspoons ground cumin',
            '1 teaspoon dried oregano','1/2 to 3/4 teaspoon fine grain sea salt, to taste','1/4 teaspoon ground cayenne pepper (optional)',
            '1 teaspoon hot sauce (optional)'],
        instructions: ['In a large pot, sauté the onion and the garlic in the oil over medium heat until soft and translucent, about 5 minutes. Season with a pinch of salt and stir.',
            'Add the jalapeños, celery, and bell pepper and sauté for another 5 to 7 minutes or so, until softened.',
            'Add the can of diced tomatoes (with the juice), broth, and tomato paste. Stir to combine. Increase heat to medium-high.',
            'Add the drained and rinsed beans, along with the chili powder, cumin, oregano, and salt. Simmer the mixture, uncovered, until thickened, about 10 to 15 minutes.',
            'Add the cayenne and hot sauce to taste, if using. Taste and season with additional salt if desired. Serve',
        ],
        credit: ''
    },
    {
        id: 11, name: 'Jumbo Stuffed Shells', category: 'Italian', servings: 6,
        ingredients: ['3.5 cups pasta sauce', '340 grams jumbo pasta shells (about 2/3 a box)', '3 garlic cloves, minced','1 medium sweet onion, diced',
            '2 tsp extra virgin olive oil','2 celery stalks, diced','1/2 cup packed fresh basil leaves, minced','1/2 cup packed fresh parsley, minced','1 (14oz) package extra-firm or firm tofu, pressed',
            '3 tbsp nutritional yeast','3/4-1 tsp fine grain sea salt, or to taste','Freshly ground black pepper, to taste','1 tbsp fresh lemon juice','1/2 tsp cayenne pepper or red pepper flakes (optional)'
        ],
        instructions: ['Rinse and press tofu', 'Grease a very large casserole dish. About 30 shells, but you should cook more than that as some shells will break during the cooking process. Cook shells in a pot of boiling water until al dente, about 8-11 minutes. Be careful not to overcook. Drain shells and set aside to cool.',
            'Preheat oven to 400°F. For the tofu ricotta: In a large skillet, sauté the garlic and onion in the oil for about 5 minutes. Season with salt and pepper. Add in the chopped celery, basil, and parsley and sauté for another 5 minutes or so. Feel free to throw in some spinach for extra greens.',
            'For the tofu, you can either crumble it into the skillet with your hands or you can give it a whirl in the food processor and then stir it into the skillet. If you use the processor, the texture will be very creamy like ricotta cheese and if you crumble it with your hands it will be more chunky/crumbly. It is up to you how you want to make it. Stir in the nutritional yeast, salt, pepper, lemon, and cayenne all to taste. Over medium heat, cook for about 8-10 minutes or until most of the water cooks off.',
            'Spoon about 1 cup of marinara sauce into the casserole dish and spread around. Add about 2 tbsp of tofu ricotta into each stuffed shell and place shells on top of marinara sauce. Cover shells with the remaining 2-2.5 cups marinara sauce and any leftover tofu ricotta. You can add vegan cheese on top. Cover dish with tin foil and poke several air holes. Bake at 400°F for about 20 minutes or until heated throughout. Serve.'
        ],
        credit: ''
    },
    {
        id: 12, name: 'Spicy Potato & Black Bean Burritos', category: 'Mexican', servings: 4,
        ingredients: ['200 grams yellow-skinned potato, not peeled and chopped into 1” pieces (about 2 small potatoes)','150 grams sweet potato, peeled and chopped (about 1/2 large)',
            '1 tsp extra virgin olive oil','1 cup diced red onion','1 jalapeno pepper, seeded and diced','1 small tomato, chopped','1/2 tsp chili powder','1 tsp ground cumin',
            '1 tbsp fresh lime juice','1 cup shredded dinosaur kale, large stems removed','1.5 cups cooked black beans (one 15-oz can), drained and rinsed',
            'Fine grain sea salt (or Herbamare) & ground pepper, to taste','toppings: Avocado slices, salsa, cilantro'
        ],
        instructions: ['In a medium-sized pot, add the chopped potatoes and cover with water. Bring to a boil and then reduce heat to medium. Gently boil/simmer for about 12-15 minutes, or until just tender.',
            'Meanwhile, preheat a large skillet with 1 tsp oil and sauté the red onion over medium heat for a few minutes. After boiling the potatoes, drain and gently mash them up a bit, leaving some chunks for texture.',
            'Add potatoes to the skillet mixture and sauté for another 5-10 minutes or so, reducing heat if necessary.',
            'Add in the diced jalapeno, tomato, chili powder, lime, and cumin. Season generously with salt and pepper and stir well, heating for a few minutes more.',
            'Finally, stir in the kale and black beans and sauté until heated through. Adjust seasonings to taste and portion on large or x-large tortilla wraps. Top with avocado, cilantro, and salsa'
        ],
        credit: ''
    },
    {
        id: 13, name: 'Vegan Fajitas', category: 'Mexican', servings: 6,
        ingredients: ['¼ cup olive oil','2½ tbsp soy sauce or tamari','2-3 tbsp lime juice, adjust to taste','2 tsp maple syrup','2 cloves garlic, finely grated',
            '1¼ tsp ground cumin','1¼ tsp smoked paprika','¼ tsp black pepper','1/8 tsp cayenne pepper, to taste','1 red bell pepper, thickly sliced',
            '1 yellow bell pepper, thickly sliced','1 red onion, thickly sliced','10½ oz oyster mushrooms','8 soft tortillas, kept warm'],
        instructions: ['Make the marinade by combining the first 9 ingredients together. Mix really well.',
            'Put all of the pepper and onion slices on a large, deep, baking tray. Add the mushrooms, tearing bigger ones into smaller pieces with your hands.',
            'Coat everything in the marinade and set aside for as long as you can, but you can bake straight away too, if you wish.', 'Preheat the oven to 200° C / 390° F.',
            'Bake the mushrooms and peppers for about 15 minutes, giving everything a good stir and then increase the temperature 435°F to bake for another 20-25 minutes, until all juices bake out and the ingredients get a nice char.',
            'Assemble your vegan fajitas by putting a generous amount of filling at the bottom of each tortilla. Finish off with chopped avocado, vegan sour cream, fresh coriander and a squeeze of lime'
        ],
        credit: ''
    },
    {
        id: 14, name: 'Sweet Potato & Peanut Curry', category: 'Asian', servings: 4, 
        ingredients: ['1 tbsp coconut oil','2 garlic cloves (grated)', 'thumb-sized piece ginger (grated)','3 tbsp Thai red curry paste',
            '1 tbsp smooth peanut butter', '500g/1lb 2oz sweet potato (peeled and cut into chunks)','400ml can coconut milk','200g/7oz bag spinach',
            '1 lime (juiced)', 'dry roasted peanuts to serve (optional)',
         ],
        instructions: ['Melt 1 tbsp coconut oil in a saucepan over a medium heat and soften 1 chopped onion for 5 mins. Add 2 grated garlic cloves and grated thumb-sized piece of ginger, and cook for 1 min until fragrant.',
            'Stir in 3 tbsp Thai red curry paste, 1 tbsp smooth peanut butter and 500g/1lb 2oz sweet potato, peeled and cut into chunks, then add 400ml/14fl oz coconut milk and 200ml/7fl oz water.',
            'Bring to the boil, turn down the heat and simmer, uncovered, for 25-30 mins or until the sweet potato is soft.',
            'Stir through 200g/7oz spinach and the juice of 1 lime, and season well. Serve with cooked rice, and if you want some crunch, sprinkle over a few dry roasted peanuts.'
        ],
        credit: ''
    },
    {
        id: 15, name: 'Vegan Ramen', category: 'Asian', servings: 2,
        ingredients: ['2 garlic cloves','thumb-sized piece ginger (sliced)', '1½ tbsp white miso paste', '1 tbsp neri goma (white sesame paste) or tahini', 
            '15g dried shiitake mushrooms', '4 cups vegan stock', '2 tbsp soy sauce', '200g firm tofu cut into cubes', '1 tbsp cornflour',
            '1 tbsp veg or sunflower oil', '100g (2 x nests) ramem', '1 head bok choy quartered', '2 spring onions finely sliced, white and green parts kept separate',
            '25g ready-to-eat beansprouts', '1 carrot peeled and cut into fine matchsticks'
        ],
        instructions: ['Crush the garlic with the back of a big knife, then put it in a saucepan with the ginger, miso, neri goma, mushrooms, stock and soy. Bring to a gentle simmer, cover and bubble for 5 mins until the ginger is soft. Strain into a clean pan and discard everything left in the strainer.',
            'Meanwhile, cook the tofu. Toss it in the cornflour and heat the oil in a frying pan. Fry for a few mins on each side, being careful as you turn it that it doesn’t fall apart. Cook the noodles for 1 min less than pack instructions, so they retain a little bite. Drain and leave in the pan with a little cooking water so they don’t stick together.',
            'Add the bok choy and whites of the spring onions to the broth and gently reheat for 1-2 mins until the greens have just wilted.',
            'Divide the noodles between two deep bowls, ladle over the broth and veg. Top with the tofu, beansprouts, carrot and ginger matchsticks, green parts of the spring onions and a drizzle of sesame oil, plus the other toppings, if you like.',
        ],
        credit: ''
    },
    {
        id: 16, name: 'Vegan Burritos', category: 'Mexican', servings: 4,
        ingredients: ['4 large or 8 small tortilla wraps', '2 large handfuls spinach leaves shredded', '1 avocado thinly sliced (optional)',
            '1 tbsp oil', '1 garlic clove crushed', '1 tbsp chipotle paste', '400g can chopped tomatoes', '400g black beans drained', '1 bunch coriander chopped',
            '250g wholegrain rice cooked and drained', '1 lime (juiced)', '½ red onion very finely chopped', '50g hazelnuts roughly chopped',
        ],
        instructions: ['To make the beans, heat the oil in a pan and fry the garlic for a minute, then stir in the chipotle paste. Add in the tomatoes, stir and bring to a simmer. Season with salt. Simmer until thick, add the beans and cook briefly (make sure any water gets cooked off), then stir in the coriander.',
            'If you are using cold cooked rice, then warm it through, stir in the lime juice, red onion and nuts and season well.',
            'Lay out the tortillas and sprinkle over some spinach, add some avocado slices and some rice, then top with the bean mix. Add a shake of hot sauce, if you like. Roll the bottom up, then fold the sides in to stop the filling falling out as you roll. Wrap tightly in foil, if you like, and cut in half.'
        ],
        credit: ''
    },
  ];
  
  export default recipes;