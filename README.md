## FilmCarousel Project Description

In this project, i'm goin to do a list of films from IMDB, and this films will be listed in a carousel with their posters, the rate from the imdb, the cast, and the title with the launch year

## What i will use
- IMDB API
- Angular
- VSCODE
- TYPESCRIPT
- CSS
- ANGULAR MATERIALS

## Step by Step
Day 1:
- in first moment i needed to put the  data on localhost, because, the imdb api has just 100 calls p/day, and this would make my life dificult, so i got the datas from the api, create the base.json and alocate all the datas from the most-popular films and start the server with the datas in local database in a json file.
- with the local data, i needed to consume the api, so i created the imdb.service, and call the datas from the json i created earlyer.
- i create the component views to our carousel.
- the posters are to small, so i needed to contorn this situation, and i saw in the api has the call to posters, so i got back in the service and call the request, and make it put on our local data to avoid the use of 100 calls p/day of the api

Day 2:
- I added the angular material to our project, to make use of certains material made available by it
- I made the skeleton of our site, in sequence, i do the directives and the data bindings
- i added some visual designs, and do one verification to films that not realeased yet.

Day 3:
- I added 3 films to see in carousel side by side
- I adjusted the animation and the css of these elements
- I adjusted some issues and its almost done
- Added a simple header and footer

Day 4:
- I adjusted the color palette and theme
- I added implementes on responsivity of the page
- I added the menu button ho sort the movies by rate (Ascending to descending and vice versa) and by year (Old to New and vice versa)
- I synchronized a text below the carousel to inform what type of sort was applied.

ITS DONE!

(Apresentation video:  https://www.youtube.com/watch?v=CyqS9q2RtIA)
