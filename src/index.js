import React from "react"
import ReactDom from 'react-dom'

import App from './App.tsx'

import storageUtils from './util/storageUtils'
import memoryUtils from './util/memoryUtils'

const userS = storageUtils.getUser()

memoryUtils.user.id = userS



ReactDom.render( < App / > , document.getElementById('root'))