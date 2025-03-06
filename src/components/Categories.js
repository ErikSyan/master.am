import React, { Component } from 'react'
import { BiBath } from "react-icons/bi";
import { BiHomeSmile } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { BiCloset } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineYard } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";



export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [ 
                {
                    key : "all",
                    icon: <BiHomeSmile className="bath-icon" />
                },
                {
                    key : "Plumbing",
                    icon: <BiBath className="bath-icon" />
                },
                {
                    key : "Electricity",
                    icon: <BiBulb className="bath-icon"  />
                },
                {
                    key : "Moving",
                    icon: <LiaTruckMovingSolid className="bath-icon" />
                },
                {
                    key : "Knitting",
                    icon: <BiCloset  className="bath-icon"/>
                },
                {
                    key : "Child",  
                    icon: <FaChild  className="bath-icon"/>
                },
                {
                    key : "Cleaning", 
                    icon: <MdOutlineCleaningServices className="bath-icon"/>
                },
                {
                    key : "Yard",
                    icon: <MdOutlineYard  className="bath-icon"/>
                },
                {
                    key : "Construction",
                    icon: <MdConstruction className="bath-icon" />
                }
                ,
                {
                    key : "Car",
                    icon: <IoCarSportOutline className="bath-icon" />
                }
            ],
        }
    }


  render() {
    return (
      <div className='categories' collapseOnSelect expand="md" >
        {this.state.categories.map(el => (
            <div 
            key={el.key} 
            className={`category-item ${this.state.activeCategory === el.key ? "active" : ""}`}
            onClick={() => this.props.choosCategory(el.key)}>{el.icon}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories