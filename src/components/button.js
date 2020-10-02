import React from "react"
import { BsFillChatSquareFill } from "react-icons/bs"

function Button({ chatbot, setChatbot }) {
  return (
    <div>
      <div className="flex flex-col items-end justify-end h-screen">
        <button
          onClick={() => setChatbot(!chatbot)}
          className="relative flex items-center mb-1 mr-1 overflow-hidden text-lg text-white rounded "
        >
          <div className="absolute flex items-center h-full px-3 py-1 bg-blue-800 ">
            <BsFillChatSquareFill />
          </div>
          <div className="block px-3 py-1 ml-10 bg-blue-900">
            Click here to chat
          </div>
        </button>
      </div>
    </div>
  )
}

export default Button
