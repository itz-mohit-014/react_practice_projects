import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"

// import routes Element
import App from './components/App.jsx'
import CustomPara from "./components/CustomParaGenerator/CustomPara.jsx"
import AccordianCotainer from "././components/Accordian/Accordian_container.jsx"
import SideBar from "./components/Tabs_sections/Sidebar.jsx"
import CardContainer from "./components/items_cards/CardContainer.jsx"
import NotFound from './components/Not-Found/NotFound.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'/',
        element:<Navigate to="/faqs" replace />
      },
      {
        path:'/products',
        element:<CardContainer/>
      },
      {
        path:'/custom-paragraphs-generator',
        element:<CustomPara/>
      },{
        path:'/faqs',
        element:<AccordianCotainer/>
      },{
        path:'/sections',
        element:<SideBar/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
