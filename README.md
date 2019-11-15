
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

