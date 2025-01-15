import React, { useState } from 'react';
import Image from 'next/image';

const data = [
    {
        id: 1,
        title: 'Backend',
        position: 'Senior',
        html: 'HTML',
        css: 'CSS',
        js: 'Javascript',
        company: 'Photosnap',
        new: 'NEW!',
        featured: 'FEATURED',
        description: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 2,
        title: 'Fullstack',
        position: 'Midweight',
        python: 'Python',
        react: 'React',
        company: 'Photosnap',
        new: 'NEW!',
        featured: 'FEATURED',
        description: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 3,
        title: 'Frontend',
        position: 'Junior',
        react: 'React',
        sass: 'Sass',
        js: 'Javascript',
        company: 'Photosnap',
        new: 'NEW!',
        featured: 'FEATURED',
        description: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 4,
        title: 'Frontend',
        position: 'Junior',
        css: 'CSS',
        js: 'Javascript',
        company: 'Photosnap',
        new: 'NEW!',
        featured: 'FEATURED',
        description: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 5,
        title: 'Fullstack',
        position: 'Midweight',
        react: 'React',
        sass: 'Sass',
        js: 'Javascript',
        ruby: 'Ruby',
        company: 'Photosnap',
        new: 'NEW!',
        featured: 'FEATURED',
        description: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    }
];

const Serch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

    return (
        <div>
            <Image src="/images/bg.png" width="100" height="100" objectFit='cover' alt='bg' />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item.id} className='flex items-center justify-between px-2 py-2 rounded-[5px] bg-white shadow-[0px_15px_20px_-5px_rgba(13,113,130,0.15)] mt-6'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <div>
                                        <Image src={item.img} width={50} height={50} alt={item.title} />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-4' >
                                        <p className='text-[#5CA5A5] text-[12px]'>{item.company}</p>  
                                        <p className='py-[3px] px-[8px] text-[white] rounded-[12px] bg-[#5CA5A5] text-[12px]'>{item.new}</p>
                                        <p className='py-[3px] px-[8px] text-[white] rounded-[12px] bg-[#2B3939] text-[12px]'>{item.featured}</p>  
                                    </div>
                                    <div>
                                        <p className='text-[22px] text-[#2B3939]'>{item.description}</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[#7C8F8F] text-[18px]'>{item.day}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
                                            <circle cx="2.5" cy="2" r="2" fill="#B7C4C4"/>
                                        </svg>
                                        <p>{item.time}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="4" viewBox="0 0 5 4" fill="none">
                                            <circle cx="2.5" cy="2" r="2" fill="#B7C4C4"/>
                                        </svg>
                                        <p>{item.location}</p>
                                    </div>        
                                </div>
                            </div>
                            <div className='flex gap-4 text-left'>
                                <p>{item.title}</p>
                                <p>{item.position}</p>
                                <p>{item.html}</p>
                                <p>{item.js}</p>
                                <p>{item.css}</p>
                                <p>{item.ruby}</p>
                                <p>{item.python}</p>
                                <p>{item.react}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Serch;
