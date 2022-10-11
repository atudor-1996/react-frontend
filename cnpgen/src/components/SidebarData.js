import React from 'react'
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "CNPGen",
        path: '/cnpgen',
        icon: <AiIcons.AiFillIdcard/>,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: '/about',
        icon: <AiIcons.AiFillQuestionCircle/>,
        cName: 'nav-text'
    }
]
