import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            role: "",
            token: "",
            isLogin: false
        }

        this.state.role = localStorage.getItem("role")
        this.state.token = localStorage.getItem("token")
    }

    logout = () => {
        if (window.confirm("Are you sure to logout?")) {
            localStorage.clear()
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("username")
            this.setState({
                isLogin: false
            })
        }
    }

    componentDidMount() {
        if (this.state.token) {
            this.setState({
                isLogin: true
            })
        }
    }

    render() {
        return (
            <nav class="bg-gray-50 px-5 sm:px-8 w-full z-20 top-0 left-0 drop-shadow-md md:drop-shadow-xl">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <NavLink to="/home" className="hidden lg:block h-10 ml-3 w-10 mr-0 ">
                        <img src="/assets/logo.png" alt="icon" />
                    </NavLink>
                </div>
            </nav>

        )
    }
}