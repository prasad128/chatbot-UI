import React from "react"
import { FaQuestion, FaRobot, FaRegHandPaper } from "react-icons/fa"
import { HiOutlineChatAlt2 } from "react-icons/hi"
import { motion } from "framer-motion"

export const Bot = ({ chatbot, setChatbot }) => {
  const background = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  }

  const titleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
      },
    },
  }

  const questions = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 4,
        duration: 1,
      },
    },
  }

  const q1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 6,
        duration: 1,
      },
    },
  }
  const q2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 8,
        duration: 1,
      },
    },
  }
  const q3 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 10,
        duration: 1,
      },
    },
  }
  const q4 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 12,
        duration: 1,
      },
    },
  }

  const conversation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 14,
        duration: 1,
      },
    },
  }

  return (
    <div className="flex justify-end">
      <div
        style={{ width: "416px", borderRadius: "20px" }}
        className="mt-1 mr-1 overflow-hidden rounded-lg shadow-2xl"
      >
        <motion.div
          variants={background}
          initial="hidden"
          animate="visible"
          style={{
            padding: "20px 0 ",
            height: "278px",
          }}
          onClick={() => setChatbot(false)}
          className="text-white cursor-pointer bg-gradient-to-tr from-orange-500 to-orange-600"
        >
          <motion.div
            variants={titleVariant}
            initial="hidden"
            animate="visible"
            className=""
          >
            <div style={{ margin: "0 56px" }} className="">
              {/* <div
                onClick={() => setChatbot(!chatbot)}
                className="text-lg font-bold"
              >
                _
              </div> */}
              <h1 className="text-3xl font-semibold leading-10">IRIS</h1>
              <div className="mt-1 text-xl font-semibold leading-8">
                Hello{" "}
                <span className="inline-block ml-2">
                  <FaRegHandPaper color="gray" />
                </span>
              </div>
              <div className="mt-1 text-lg font-medium ">
                I am Iris, a Virtual Assistant
              </div>
              <div className="leading-tight">How may I help you?</div>
            </div>
            <div
              style={{
                margin: "15px 38px 46px",

                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
              }}
              className="relative z-30 inline-block p-4 bg-orange-600 border-orange-500 rounded-full shadow-2xl"
            >
              <span>
                <FaRobot size="2.5rem" className="" />
              </span>
              {/* <span className="">
              <i className="fas fa-robot fa-2x"></i>
            </span> */}
            </div>
          </motion.div>
        </motion.div>
        <div className="">
          <motion.div
            variants={questions}
            initial="hidden"
            animate="visible"
            className="relative px-3 pb-10 "
            style={{ color: "#2d2d2d", marginTop: "-5rem" }}
          >
            <div className="px-6 bg-gray-100 border rounded-lg">
              <motion.div className="mt-12 text-sm font-medium">
                Frequently asked questions
                <span className="inline-block ml-4">
                  <FaQuestion color="#FF7600" />
                </span>
              </motion.div>
              <div className="">
                <motion.div
                  variants={q1}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center border rounded-lg"
                  style={{
                    borderColor: "#e4e4e4",
                    padding: "15px 0",
                    marginTop: "8px",
                  }}
                >
                  <div className="pl-1">
                    <svg height="16" width="25">
                      <circle cx="8" cy="8" r="4" fill="#ff7600" />
                    </svg>
                  </div>

                  <div className="text-xs">
                    Can I redeem my FB before the original term?
                  </div>
                </motion.div>
                <motion.div
                  variants={q2}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center border rounded-lg"
                  style={{
                    borderColor: "#e4e4e4",
                    padding: "15px 0",
                    marginTop: "8px",
                  }}
                >
                  <div className="pl-1">
                    <svg height="16" width="25">
                      <circle cx="8" cy="8" r="4" fill="#ff7600" />
                    </svg>
                  </div>

                  <div className="text-xs">
                    How do I pay my Credit card bill?
                  </div>
                </motion.div>
                <motion.div
                  variants={q3}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center border rounded-lg"
                  style={{
                    borderColor: "#e4e4e4",
                    padding: "15px 0",
                    marginTop: "8px",
                  }}
                >
                  <div className="pl-1">
                    <svg height="16" width="25">
                      <circle cx="8" cy="8" r="4" fill="#ff7600" />
                    </svg>
                  </div>

                  <div className="text-xs">
                    How can I get my Account Statement?
                  </div>
                </motion.div>
                <motion.div
                  variants={q4}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center border rounded-lg"
                  style={{
                    borderColor: "#e4e4e4",
                    padding: "15px 0",
                    marginTop: "8px",
                  }}
                >
                  <div className="pl-1">
                    <svg height="16" width="25">
                      <circle cx="8" cy="8" r="4" fill="#ff7600" />
                    </svg>
                  </div>

                  <div className="text-xs">
                    What is the tenure of Fixed Deposit?
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={conversation}
                initial="hidden"
                animate="visible"
                style={{
                  marginTop: " 29px",
                  marginBottom: "21px",
                  padding: "13px 5px",
                  width: "268px",
                  height: " 44px",
                  borderRadius: " 100px",
                }}
                className="flex items-center justify-center mx-auto border"
              >
                <div className="self-center" style={{ marginTop: "" }}>
                  <HiOutlineChatAlt2 />
                  {/* <span className="material-icons" style={{ fontSize: "14px" }}>
                  insert_comment
                </span> */}
                </div>
                <div className="text-sm" style={{ marginLeft: "5px" }}>
                  Start a New Conversation
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
