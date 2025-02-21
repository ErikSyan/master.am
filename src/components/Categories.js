import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [ 
                {
                    key : "all",
                    name: "Բոլորը"
                },
                {
                    key : "Atorner",
                    name: "Բակային աշխատանքների ծառայություններ"
                },
                {
                    key : "Bazmocner",
                    name: "Մաքրում"
                },
                {
                    key : "Luyser",
                    name: "Տեղափոխման ծառայություններ"
                }
            ]
        }
    }



  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choosCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories