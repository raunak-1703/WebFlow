const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: (id:string)=>`/profile/${id}`,
  TAGS:(id:String)=>`/tags/${id}`,
  ASK_QUESTION:'/ask-question',
  QUESTION:(id:string)=>`/questions/${id}`
} as const;

export default ROUTES

