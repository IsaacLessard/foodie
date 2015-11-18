#Galvanize First Individual Project 
##Project Description
- A website that is a diary for what you eat. Plug in your meals, and also when you feel sick. The app will recommend recipes, tell you your eating history, and will tell you if something you are eating is making you sick, (using a correlation algorithm). 
- This app helps users find food allergies for themselves or their children. It is a website which records everything a user eats alongside when they get sick, and then prints the correlation for the top food items that correlate with being sick. Common practice for general doctors is to tell patients to 'keep a food diary' when they complain about persisting stomach symptoms, and to write down when they get sick. This is burdensome, time consuming, and can be confusing. This app will make this process simple, and help mothers track their children as well.

- A result coming from this app may be ("When you drink beer, you get a headache 87% of the time"), or ("Jimmy gets stomach aches 99% of the time when he drinks milk"). Most allergic reactions take place within several hours of eating, so this app's MVP will just focus on food allergy reactions within this time period.

##Who uses it?

- People who want to be consious about their eating habits and find out their health in correlation to what they eat, or want to find out if their baby/child has any food allergies.

##What outputs do they need?

- data on what the user ate in correlation to when they got sick
- list of recommended recipes without the ingredients that may be making them sick
- Ability to search by sickness and see correaltion of food most often ate in correlation
- Ability to search by food and see correaltion of types of sickness that occured
- recommended recipes that appear when a user has possible food allergy correlations
- recommendations for further testing( allergy skin test, etc)

##What inputs are needed to generate those outputs?

- journal of what they ate
- times they got sick, types of sickness
- recipes
- ingridient list
- algorithm for computing correlation between objects that have certain sick keywords and ingredient keywords
- way to enter daily meals and the timestamp for when they ate, and save into food journal
- way to enter sickness and the timestamps for when they felt sick
- way to create recipes that can easily be referenced, so instead of typing each ingredient they can click a meal plan to enter into their daily food journal

##What technologies do you plan to use?

- javascript
- scss
- Recipe API (https://developer.edamam.com/recipe-docs)
- local storage
- gulp for testing

## Feature list
As a user, 
- ... I want the ability to search by sickness or ingredient and get the correlation of sickness to item so I can make conscious diet decisions 
- ... I want recommendations on 'next step' to move towards a healthy diet 
- ... I need the ability to add food entries manually by ingredients or by a specific meal (IE ham sandwich) and when I ate 
- ... I need the ability to add in when I get sick and symptoms
- ... I want to view past entries so I can plan future meal plans 
- ... see percentages for how common certain allergies are
- ... autocomplete for ingredients to help avoiding having one ingredient have multiple correlation tables
