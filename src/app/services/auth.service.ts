export class AuthService{
  isAuth = false;
  signIn(){// methode async d'authentification qui utilise une promesse
    return new Promise(
      (resolve, reject)=>{
        setTimeout(
          ()=> {
            this.isAuth = true;
            resolve(true);
          } , 2000
        );
      }
    )

  }

  signOut(){ //pas bésoin d'etre async
    return this.isAuth=false;
  }
}
