import React, { Component } from 'react'
import styles from './RecipeForm.module.css'; 

export default class RecipeForm extends Component {
  state = {
    name: '',
    url: '',
    description: '',
    review: '',
    vegetarian: false,
    vegan: false,
    glutenfree: false,
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/recipes', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
      .then(res => res.json())
      .then(data => {
        this.props.history.push(`/recipes/${data.id}`);
      })
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    this.setState({
      [name]: checked
    })
  }

  render() {
    return (
      <div className={styles.RecipeForm}>
        <h2>Submit a Review</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Recipe Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="url">Recipe URL</label>
            <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleChange}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Recipe Description</label>
            <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="review">Recipe Review</label>
            <textarea type="text" id="review" name="review" value={this.state.review} onChange={this.handleChange} />
          </div>
          <div className={styles.formGroup}>
            <ul>
              <li>
                <input type="checkbox" id="vegetarian" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleCheckboxChange} />
                <label htmlFor="vegetarian">Vegetarian</label>
              </li>
              <li>
                <input type="checkbox" id="vegan" name="vegan" checked={this.state.vegan} onChange={this.handleCheckboxChange} />
                <label htmlFor="vegan">Vegan</label>
              </li>
              <li>
                <input type="checkbox" id="glutenfree" name="glutenfree" checked={this.state.glutenfree} onChange={this.handleCheckboxChange} />
                <label htmlFor="glutenfree">Gluten Free</label>
              </li>
            </ul>
          </div>
          <button type="submit" style={{color:"red"}}>Add Review</button>
        </form>
      </div>
    )
  }
}
