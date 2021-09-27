import React, { Component } from 'react'
import { getName } from 'country-list'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    arr = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za".split(" ")
    constructor(){
        super()
        this.state={searchText:""}
    }
    handlePress=(event,a)=>{
        this.props.search(a)
    }
    fetch = () => {
        this.country = {}
        for (let val of this.arr) {
            this.country[getName(val)] = val;
        }
        // console.log(this.country)
    }
    handleState = (event) => {
        let cont = event.target.value
        this.props.changeFuc(this.country[cont], cont)
    }
    fill = () => {
        this.fetch();
        return (
            Object.keys(this.country).map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            })
        )
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sport">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>

                            <li className="nav-item dropdown" >
                                <p className="nav-link" style={{ cursor: "pointer" }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    State
                                </p>
                                <select onChange={this.handleState} value={this.props.country} className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ scrollBehavior: "auto" }}>
                                    {this.fill()}
                                </select>
                            </li>
                            <li className="nav-item" style={{cursor:"pointer"}}>
                                <p className="nav-link" onClick={(event)=>{this.setState({searchText:""});this.handlePress(event,"")}}>All</p>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" onChange={(event)=>{this.setState({searchText:event.target.value})}} value={this.state.searchText} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={(event)=>{this.handlePress(event,this.state.searchText)}} type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}