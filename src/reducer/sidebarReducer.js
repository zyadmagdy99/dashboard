const sidebarReducer = (state,action) =>{
    if(action.type == "TOGGKE_SIDEBAR"){
        return{
            ...state,
            isSidebarOpen:!state.isSidebarOpen
        }
    }
    throw new Error (`no matching "${action.type}" action type`)
}

export default sidebarReducer;