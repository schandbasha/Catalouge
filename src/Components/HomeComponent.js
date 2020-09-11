import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { getHomepageItemsAction,showFormPageAction,showCreateFormPageAction } from '../Actions/HomeAction';

class HomeComponent extends Component {
    constructor(props){
        super(props);
        
    }
   
    render(){
        return(
            <div className = "homeClass">
                <div className="header">WELCOME TO<br />
                    RENTAL MANAGEMENT SYSTEM
                </div>
                <p className="bodyContent">Please select Location </p>
                <div class="footer">
                    <p>Footer @ : ALL RIGHTS RESERVED</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {
}
const HomeComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);
export default HomeComponentContainer;