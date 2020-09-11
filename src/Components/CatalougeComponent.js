import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { subcategoriesItemAction,branchDetailsAction,showCategoryImagesListAction,showSubCategoryImagesListAction } from '../Actions/HomeAction';

class CatalougeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            subCategoryName: ""
        }
    }
    handleSubCategoryList(subcategories,itemName){
        this.props.subcategoriesItemAction(subcategories);
        this.setState({
            subCategoryName: itemName
        })
        this.props.showCategoryImagesListAction(false);
        this.props.showSubCategoryImagesListAction(true)
    }
    showCategoryImagesList(){
        let categoryImages = this.props.branchitemDetails.map((item,index) => {
            return(
                <div className="imageItem">
                    <img className="categoryImageClass" src={"./public/assets/category/"+item.image} alt ={item.name}/>
                    <div className="imageHeader" onClick={this.handleSubCategoryList.bind(this,item.subcategories,item.name)}>{item.name}
                        <span>{">"}</span>
                    </div>
                </div>
            )
        })
        return categoryImages;
    }
    showSubCategoryImagesList(){
        let subcategoryImagesList = this.props.subcategoriImages.map((item,index) =>{
            return(
                <div className="imageItem">
                    <img className="categoryImageClass" src={"./public/assets/category/subcategory/"+item.image} alt ={item.name}/>
                    <div className="imageHeader">{item.name}
                        <span>{">"}</span>
                    </div>
                </div>
            )
        })
        return subcategoryImagesList;
    }
    headerHandler(){
        this.props.showCategoryImagesListAction(true);
        this.props.showSubCategoryImagesListAction(false)
    }
    render(){
        return(
            <div className="catalougeContainer">
                {this.props.showCategoryLists ? 
                <header className="headerpage">{"Equipments Catalouge"}</header> :
                <header className="headerpage" onClick={this.headerHandler.bind(this)}>{"Equipments Catalouge   "+"/   "+this.state.subCategoryName }</header> 
                }
                <div className="imageContainer">
                    {/* {!this.props.subcategoriImages.length > 0 && this.props.branchitemDetails.length > 0 ? this.showCategoryImagesList() : ""} */}
                    {/* {this.props.subcategoriImages.length > 0 && this.props.branchitemDetails.length > 0 ? this.showSubCategoryImagesList() : ""} */}
                    {this.props.showCategoryLists ? this.showCategoryImagesList() : ""}
                    {this.props.showSubCategoryLists ? this.showSubCategoryImagesList() : ""}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  locationDetails : state.HomeReducer.locationDetails,
  branchitemDetails: state.HomeReducer.branchitemDetails,
  subcategoriImages : state.HomeReducer.subcategoriImages,
  showCategoryLists: state.HomeReducer.showCategoryLists,
  showSubCategoryLists : state.HomeReducer.showSubCategoryLists
});
const mapDispatchToProps = {
    subcategoriesItemAction,
    branchDetailsAction,
    showCategoryImagesListAction,
    showSubCategoryImagesListAction
}
const CatalougeComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    
)(CatalougeComponent);
export default CatalougeComponentContainer;