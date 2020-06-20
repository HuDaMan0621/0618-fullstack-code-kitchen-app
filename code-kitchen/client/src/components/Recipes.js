import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Recipes';

export default class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []

        }
    }


    componentDidMount() {
        fetch('/api/v1/recipes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recipes: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"

        };
        return (
            <div>
                {this.state.recipes.map((recipe) => {

                    return (
                        <div className="box" key={recipe.id}>
                            {/* <pre>{JSON.stringify(recipe, null, '\n')}</pre> */}
                            <h1 style={mystyle}>{recipe.name}</h1>
                            <p> {recipe.description} </p>
                            <p> {recipe.url}</p>
                            <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                            <p></p>
                            <p></p>
                        </div>
                    )

                })}
            </div>
        )
    }
}
