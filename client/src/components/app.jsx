import React from "react";
import axios from "axios";
import Banner from "./banner.jsx";
import Configurations from "./configurations.jsx";
import ImageCarousel from "./imageCarousel.jsx";
import styles from "../style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : {},
            displayedImageObj : {}
        };
    }

    stateUpdater(callback) {
        axios.get("/carousel/fetch")
        .then(res => {
            // console.log(res.data[0])
            callback(null, res.data);
        })
        .catch(err => {callback(err)})
    }

    componentDidMount() {
        this.stateUpdater((err, data) => {
            if (err) throw "Error : " + err;
            this.setState({
                product : data[0],
                displayedImageObj : data[0].photos[0]
            })
        })
    }

    render() {
        // console.log(this.state, "app state")
        // console.log(JSON.stringify(styles), "style!")
        return (
            <div className="react-app">
                <Banner productName={this.state.product.product_name}/>
                <div className="contents">
                <ImageCarousel images={this.state.product.photos} displayedImage={this.state.displayedImageObj}/>
                <Configurations price={this.state.product.price} rating={this.state.product.rating} sizes={this.state.product.sizes}/> 
                </div>
            </div>
        )
    }
}

export default App;