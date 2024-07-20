import React from 'react';

interface ProjectProps {
    icon: string;
    project: string;
}

const Project: React.FC<ProjectProps> = ({ icon, project }) => {
    return (
        <div className="flex gap-3 items-center my-2">
            <div className='bg-white p-2.5 rounded-full'>
                <img src={icon} alt={project} />
            </div>
            <h5 className="text-xl font-semibold">{project}</h5>
        </div>
    );
};

export default Project;
