import React from "react"
import { Bot } from "../components/bot"

import Button from "../components/button"

export default function Home() {
  const [chatbot, setChatbot] = React.useState(false)
  return (
    <div>
      {chatbot ? (
        <Bot chatbot={chatbot} setChatbot={setChatbot} />
      ) : (
        <Button chatbot={chatbot} setChatbot={setChatbot} />
      )}
    </div>
  )
}
