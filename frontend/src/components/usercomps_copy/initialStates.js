export const authState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:"aman",
    isRegistered:false
}
export const errState={data:{},ststus:"",message:""}
export const postState={
    userdata:{},
    userposts:[],
    allposts:[],
    allusers:[],
    searcheduserspost:[]
}