import React, { Component } from 'react'

export default class ReceipeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {},
            loading: true,
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.id); 
        const { id } =this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                details: data,
                loading: false, //check to see if the component piece is still loading
            })
        })
    }

    render() {
        const { loading, details } = this.state;
        if (loading) {
            return <div>Loading........</div>
        }

        return (
            <div className="RecipeDetails">
                <h1>{details.name}</h1>
            </div>
        )
    }
}



