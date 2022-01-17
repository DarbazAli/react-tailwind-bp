import React from "react"

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`py-4 px-8 my-6 rounded-xl ${
                props.type === "primary" ? "bg-lezzoo-700" : "bg-lezzoo-100"
            }  text-xl text-lezzoo-50 shadow-md shadow-lezzoo-300 hover:bg-lezzoo-600 active:shadow-none transition duration-300`}>
            {props.children}
        </button>
    )
}

export default Button
