import React from 'react'
import './General.css';




class Test extends React.Component {

    state = {
        isLoading: true
    };

    // componentDidMount() {
    //     setTimeout(() => {this.setState({isLoading: false})}, 3000);
    // }

    
     
    render() {

        const {isLoading} = this.state;
        return <h1>{isLoading ? 'loading...' : 'Страница Загружена'} </h1>
    }
}

export default Test