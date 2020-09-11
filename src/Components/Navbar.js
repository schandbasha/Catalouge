import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { branchDetailsAction,showCategoryImagesListAction,showSubCategoryImagesListAction } from '../Actions/HomeAction';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
          showsubCatDropdown : false,
          brancheData :  [],
          showclass: false,
          locationName : "",
          selectedClass : false
        }
    }
    showBranchDetailsrDopdown(branches,locationName){
      this.setState({
        showclass: true,
        showsubCatDropdown : true,
        branchData: branches,
        locationName : locationName,
        selectedClass : true
      })
    }
    locationDetailsDropdown(){
      let locations = this.props.locationDetails.map((loc,index) => {
      let selectedClassName = this.state.locationName === loc.name ? "selected" : ""
          return (
                    <li className={selectedClassName} onClick={this.showBranchDetailsrDopdown.bind(this,loc.branches,loc.name)}>{loc.name}
                    </li>
          )
      })
      return locations;
    }
    branchDetailstDropdownHandler(branch){
      this.props.showCategoryImagesListAction(true);
      this.props.showSubCategoryImagesListAction(false);
      this.props.branchDetailsAction(branch.categories);
      this.setState({
        showclass: false,
        showsubCatDropdown : false,
      })
    }
    branchDetailsDropdown(){
        let branche = this.state.branchData.map((branch,ind) =>{  
            return (
                <li onClick = {this.branchDetailstDropdownHandler.bind(this,branch)}>{branch.name}</li>
            )
        })
        return branche;
    }
    showDropdownClass(){
      this.setState({
        showclass: !this.state.showclass,
        showsubCatDropdown: false
      })
    }
    render(){
      let showclass = this.state.showclass ? "show" : "";
      let displayClass = this.state.showsubCatDropdown ? "showSubCat" : "";
        return(
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <a className="navbar-brand" href="http://localhost:8080">RENTAL MANAGEMENT SYSTEM</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li onClick ={this.showDropdownClass.bind(this)}>
                  <a className="nav-link" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Select Location
                  </a>
                </li>
              </ul>
                  <div className={"dropdown-menu " +showclass} aria-labelledby="navbarDropdown">
                    <ul className="locationItems">
                      {this.state.showclass ? this.locationDetailsDropdown() : ""}
                    </ul>
                  </div>
                  <div className={"subMenudropdown-menu "+displayClass}>
                    <ul className="branchItems">
                        {this.state.showsubCatDropdown ? this.branchDetailsDropdown() : ""}
                    </ul>
                  </div>
            </div>
          </nav>
        )
    }
}
const mapStateToProps = (state) => ({
  locationDetails : state.HomeReducer.locationDetails,
  branchitemDetails: state.HomeReducer.branchitemDetails
});
const mapDispatchToProps = {
  branchDetailsAction,
  showCategoryImagesListAction,
  showSubCategoryImagesListAction
}
const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
export default NavbarContainer;