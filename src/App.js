import React from "react"

import Button from "./components/Button"

const App = () => {
    return (
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
            <div>
                <div className='text-xl font-medium text-blue-500'>
                    ChitChat
                </div>
                <p className='text-slate-500'>You have a new message!</p>

                <Button
                    onClick={(e) => {
                        console.log("Hello")
                    }}
                    type='primary'>
                    Go to chat
                </Button>
            </div>
        </div>
    )
}

export default App
