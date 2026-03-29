interface SignInWithOAuthParams{
      user:{name:string;email:string;image?:string};
      provider:'google'|'github';
      providerAccountId:string;
    }