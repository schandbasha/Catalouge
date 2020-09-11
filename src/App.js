import React, { Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar';
import HomeComponent from './Components/HomeComponent';
import { getAllDataAction } from './Actions/HomeAction';
import CatalougeComponent from './Components/CatalougeComponent';

class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getAllDataAction();
    }
    render(){
        console.log(this.props.branchitemDetails,"vv")
        return(
                <div className = "App">
                    <Navbar />
                    {this.props.branchitemDetails.length > 0 ? <CatalougeComponent /> : <HomeComponent />}
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    branchitemDetails: state.HomeReducer.branchitemDetails

});
const mapDispatchToProps = {
    getAllDataAction
}
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default AppContainer;