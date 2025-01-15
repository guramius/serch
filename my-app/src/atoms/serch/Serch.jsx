import React, { useState } from 'react'
const data = [
    {
        id: 1,
        title:'Frontend',
        postion: 'Senior',
        html: 'HTML',
        css: 'Css',
        js: 'Javascript'
    },
    {
        id: 2,
        title:'Fullstack',
        postion: 'Midweight',
        python: 'Python',
        react: 'React',
    },
    {
        id: 3,
        title:'Frontend',
        react: 'React',
        sass: 'Sass',
        js: 'Javascript'
    },
    {
        id: 4,
        title:'Frontend',
        react: 'Junior',
        css: 'CSS',
        js: 'Javascript'
    },
    {
        id: 5,
        title:'Fullstack',
        react: 'Midweight',
        sass: 'Sass',
        js: 'Javascript',
        ruby:'Ruby'
    }
]
const Serch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        return Object.values(item)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4"
            />
            <div>
                {filteredData.map((item) => (
                    <div key={item.id} className="mb-4">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p>{item.position}</p>
                        {Object.keys(item)
                            .filter((key) => key !== 'id' && key !== 'title' && key !== 'position')
                            .map((key) => (
                                <p key={key}>{`${key}: ${item[key]}`}</p>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Serch