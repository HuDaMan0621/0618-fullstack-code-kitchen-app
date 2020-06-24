import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LikesButton from './LikesButton';
import styles from './Recipes.css'; 
import styles2 from './LikesButton.css';

export default class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
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
  }

  handleLike = (id, newLikes) => {
    const newRecipe = this.state.recipes.find((recipe)=> recipe.id === id)
    newRecipe.likes = newLikes
    const newRecipes = this.state.recipes.map(recipe => {
      if (recipe.id === id) {
        return newRecipe
      }
      return recipe;
    })
    this.setState({
      recipes: newRecipes
    })
  }

  render() {
    return (
      <div>
        { this.state.recipes.map(recipe => {
          return (
            <div className="Card" key={recipe.id} >
              <h1>{ recipe.name }</h1>
              <p>{ recipe.description }</p>
              <Link to={`/recipes/${recipe.id}`} style={{color:"red"}} >Show Details</Link>
              <LikesButton id={recipe.id} />
              <Link to="/recipes/new" className="buttonStyle2">Submit a review</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
