import React from "react"
import tw from "tailwind-styled-components"

const App = () => {
    return (
        <div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
            <div>
                <div class='text-xl font-medium text-blue-500'>ChitChat</div>
                <p class='text-slate-500'>You have a new message!</p>

                <Button>Click to chat</Button>
            </div>
        </div>
    )
}

const Button = tw.button`py-4 px-8 my-6 rounded-lg bg-blue-500 text-xl text-white shadow-slate-50 hover:bg-blue-400 transition-colors duration-300 active:bg-blue-300`

export default App
