## FilmCarousel Project Description

In this project, i'm goin to do a list of films from IMDB, and this films will be listed in a carousel with their posters, the rate from the imdb, and the name

## What i will use
- IMDB API
- Angular
- VSCODE
- TYPESCRIPT
- CSS
- HTML

## Step by Step
1- in first moment i needed to put the  data on localhost, because, the imdb api has just 100 calls p/day, and this would make my life dificult, so i got the datas from the api, create the base.json and alocate all the datas from the most-popular films and start the server with the datas in local database in a json file.

2- with the local data, i needed to consume the api, so i created the imdb.service, and call the datas from the json i created earlyer.

3- i create the component views to our carousel.

4- the posters are to small, so i needed to contorn this situation, and i saw in the api has the call to posters, so i got back in the service and call the request, and make it put on our local data to avoid the use of 100 calls p/day of the api

