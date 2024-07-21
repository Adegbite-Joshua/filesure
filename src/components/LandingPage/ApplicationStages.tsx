import React from 'react'

export default function ApplicationStages({icon, title, text, stageIcon}:{icon:string, title:string, text:string, stageIcon:string}) {
    return (
        <div className="relative p-5 rounded-md shadow-md overflow-hidden">
            <img src={stageIcon} alt="" className="absolute h-full inset-y-3 right-0" />
            <div className="flex items-center gap-3">
                <img src={icon} className="h-14 w-14" alt={`Application stage ${stageIcon}`} />
                <h5 className="text-xl font-bold">{title}</h5>
            </div>
            <p className="my-3">{text}</p>
        </div>
    )
}
