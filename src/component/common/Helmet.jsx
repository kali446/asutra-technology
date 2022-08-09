import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Modern Software Development Company of Nepal </title>
                    <meta name="description" content="Asutra Technology is one of the best Software and Web Development Company in Nepal. Asutra technology provides quality software and websites using modern best tools. We try to convert our customers ideas and vision into reality." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
