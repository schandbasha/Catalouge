
export const branchDetailsAction = (payload) => {
    return {
        type : "BRANCH_DETAILS",
        payload
    }
} 
export const getAllDataAction = (data) => {
    return (dispatch) => {
        return fetch("./public/data/catalog.json")
        .then( res => res.json())
        .then((response) => {
            dispatch({
                'type' : "GET_ALL_DATA",
                'payload' : response
            })
        })
        .catch((error) => {
            throw error;
        })
    }
}
export const subcategoriesItemAction = (payload) => {
    return {
        type : "SUB_CAT_IMAGES",
        payload
    }
} 
export const showCategoryImagesListAction = (payload) => {
    return {
        type : "SHOW_CATEGORY_LIST",
        payload
    }
} 
export const showSubCategoryImagesListAction = (payload) => {
    return {
        type : "SHOW_SUB_CATEGORY_LIST",
        payload
    }
} 