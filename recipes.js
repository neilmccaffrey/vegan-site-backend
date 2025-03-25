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
  ];
  
  export default recipes;