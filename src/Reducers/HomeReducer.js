let initialState = {};
initialState.itemDetails = {};
initialState.locationDetails = [];
initialState.locationbranches = [];
initialState.branchitemDetails = [];
initialState.subcategoriImages = [];
initialState.showCategoryLists = false;
initialState.showSubCategoryLists = false;

export default (state= initialState, action) => {
    let homeinformation = Object.assign({}, state)

    switch(action.type) { 
        case "GET_ALL_DATA":
        homeinformation.itemDetails = action.payload.data;
        homeinformation.locationDetails = action.payload.data.locations;
        homeinformation.locationbranches = action.payload.data.locations;
        return homeinformation;

        case "BRANCH_DETAILS":
        homeinformation.branchitemDetails = action.payload;
        // console.log(homeinformation.homePageItems,"homeinformation.homePageItems")
        return homeinformation;

        case "SUB_CAT_IMAGES":
         homeinformation.subcategoriImages = action.payload;
         return homeinformation;

         case "SHOW_CATEGORY_LIST":
         homeinformation.showCategoryLists = action.payload;
        return homeinformation;

        case "SHOW_SUB_CATEGORY_LIST":
         homeinformation.showSubCategoryLists = action.payload;
        return homeinformation;

    default:
    return state;
            
    }
}