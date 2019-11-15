## Swagger JWT 

Pour ce TP, après avoir fait une documentation de l'api avec swagger, il faut faire le back pour générer un JWT et tester toute notre API. Ici, j'ai un peu galéré sur le swagger, mais encore plus sur le back. j'ai trouvé une source pour utiliser swagger en javascript. Pour le JWT et swagger, j'ai utilisé la bibliothèque swagger-tools et fait ça sur Express. 

Je n'ai pas reussi a faire ça avec un projet plus complexe comme celui des banques. Pour essayer j'ai donc simplement fait la partie Authentification avec des type d'utilisateur, un admin et un user lambda.

Deplus, je n'ai pas réussi a avoir les clefs publiques et privées des JWT, ou alors j'ai pas saisi un truc. 



## Marche a suivre
 
1) Lancer le server avec `npm start`

2) Accéder au swagger-ui : `http://localhost:3000/docs`

3) GET `http://localhost:3000/api/protected` 

4) Essayer POST `http://localhost:3000/api/login/user` with the following body
``
{
"username": "username",
"password": "password"
}
``
 Normalement, il devrait y avoir un JWT, que l'on peu vérifier sur le site JWT. On peut prendre ce JWT et l'utiliser pour la suite. 
 
 5) GET `http://localhost:3000/api/protected` avec le header suivant 
 ``Authorization: Bearer _TOKEN_``, et remplacer `_TOKEN_ ` avec le JWT copié précédement
  
Normalement le login admin devrait maintenant fonctionner et le JWT est vérifié. 

Je ne pense pas que cette utilisation du JWT est la bonne, je n'ai pas utilisé de bibliothèques renseignées dans la liste sur jwt.io 

Cependant, je commence a y voir clair dans le focntionnement des APIs et même des JWT, alors que je ne connaissais presque rien au début du cours de WebService. 
