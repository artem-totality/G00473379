# Mobile Applications Development
# Recipe Finder Ionic Application

**Author:** Artem Vasylevytskyi  
**Student Number:** G00473379

The development of this mobile application was conducted using the Git version control system and can be fully explored at the following link:  
https://github.com/artem-totality/G00473379

## Requirements

- NodeJS (22.x.x)
- npm (10.x.x)

## ⚠️ IMPORTANT NOTICE ⚠️

This project uses the npm `query-string` package to form query strings! The project will not work if you only copy the `src/` folder. You must use the entire project from the archive uploaded to Moodle or download it from the repository.

After downloading, you need to **add your Spoonacular API key** to the configuration file `src/assets/config.json`. You can use the template `config.example.json` as an example.

## Quick Start

```bash
npm i
npm run start
```

## Implemented Features

The following functionalities have been implemented in the application:

1. **Header with Navigation Icons** - Window header with icons for the favorites page and settings page.

2. **Recipe Search by Ingredients** - Ability to search for recipes by a list of ingredients (ingredients must be entered in the input field, separated by commas).

3. **Quick Search Clear** - When any text is entered in the search field, a clear button appears to the right of the search bar. Clicking this button clears the input field and the list of loaded recipes.

4. **Display of Found Recipes** - All found recipes are loaded into a list. Each recipe is presented as a card with a Details button and a like button (add to favorites).

5. **Favorites Page** - A list of recipes curated by the user based on personal preferences. Each recipe is presented as a card with a Details button and a like button (add to favorites). On this page, clicking the like button immediately removes the recipe from the favorites list.

6. **Details Page** - Displays a list of ingredients needed to prepare the recipe, as well as step-by-step cooking instructions. At the bottom of the page, there is also a like button (add to favorites).

7. **Settings Page** - Allows you to specify measurement units.

8. **Persistent Storage** - Selected measurement units and the list of favorite recipes are saved in browser storage. After closing the tab or reloading the browser, they are fully restored. Also, when searching again, all recipes previously added to Favorites are highlighted with a red heart. Therefore, the user always knows (sees) which recipes are already in the favorites list!

9. **Reactive Services** - All intra-component interaction is implemented using reactive services, which allows instant display of all changes made by the user!

## Performance

The application has been tested and demonstrated excellent performance and reliability on the following operating systems:

1. Linux Mint 22
2. MX Linux 23.6 "Libretto"
3. Windows 11

---

Feel free to reach out with any questions!
