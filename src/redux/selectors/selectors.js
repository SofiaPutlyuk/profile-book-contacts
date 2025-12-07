export const selectIsLogin =  select => select.login?.isLogin 
export const selectCurrentUser = select => select.login?.currentUser
export const selectUserRegister = select => select.register?.email
export const selectContactsItems = select => select.contacts?.items