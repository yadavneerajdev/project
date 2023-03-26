export  const reducer = (state,action)=>{
    switch(action.type){
        case 'HOME_UPDATE':
            return {
                ...state,
                title:action.payload.title,
                image:action.payload.image
            };
        case 'ABOUT_UPDATE':
            return {
                ...state,
                title:action.payload.title,
                image:action.payload.image
            };

    }
}

export default reducer;