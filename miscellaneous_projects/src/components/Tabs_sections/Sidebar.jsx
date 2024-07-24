import { useState } from "react";
import data from "../Tabs_sections/data.js"
import Content from "./content.jsx";

const SideBar = () => {
    const [sideBarContent , setData] = useState(data);
    const [content, setContent] = useState(sideBarContent[0]);

    return (
        <section className="p-8 flex flex-col md:flex-row">
            <nav className="md:max-w-1/3">
                <ul className=" w-full flex gap-4 flex-wrap justify-center md:flex-col"> 
                    {
                        sideBarContent.map((menu) => {
                          return <li className="underline underline-offset-4 text-3xl ml-4 py-3 px-2 mb-2" onClick={() => setContent(menu)} key={menu.id}>{menu.tag}</li>
                        })
                    }
                  
                </ul>
            </nav>
            <Content details={content}/>
        </section>

    )
}


export default SideBar;