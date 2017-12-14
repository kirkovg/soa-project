#!/bin/bash

cd AuthorMicroservice
bash mvnw package -Pprod -DskipTests dockerfile:build
cd ..

cd BookMicroservice
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..

cd BookPictureMicroservice 
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..

cd GenreMicroservice 
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..

cd RatingMicroservice 
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..

cd UserPreferencesMicroservice 
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..

cd api-gateway 
bash mvnw package -Pprod -DskipTests dockerfile:build 
cd ..
