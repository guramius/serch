import Image from 'next/image'

const dataBas = [
    {
        id: 1,
        postion: 'Photosnap',
        new: 'NEW!',
        featured:'FEATURED',
        title: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 2,
        postion: 'Photosnap',
        new: 'NEW!',
        featured:'FEATURED',
        title: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 3,
        postion: 'Photosnap',
        new: 'NEW!',
        featured:'FEATURED',
        title: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 4,
        postion: 'Photosnap',
        new: 'NEW!',
        featured:'FEATURED',
        title: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
    {
        id: 5,
        postion: 'Photosnap',
        new: 'NEW!',
        featured:'FEATURED',
        title: 'Senior Frontend Developer',
        day: '1d ago',
        time: 'Full Time',
        location: 'USA only',
        img: '/images/icone.png'
    },
]
const Data = () => {
  return (
    <>
        {dataBas.map((item) => (
            <div key={item.id} className='flex items-center gap-3'>
                <div>
                    <div>
                        <Image src={item.img} width={50} height={50} alt={item.title} />
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4' >
                        <p className='text-[#5CA5A5] text-[12px]'>{item.postion}</p>  
                        <p className='py-[3px] px-[8px] text-[white] rounded-[12px] bg-[#5CA5A5] text-[12px]'>{item.new}</p>
                        <p className='py-[3px] px-[8px] text-[white] rounded-[12px] bg-[#2B3939] text-[12px]'>{item.featured}</p>  
                    </div>
                    <div>
                        <p className='text-[22px] text-[#2B3939]'>{item.title}</p>
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
        ))}
    </>
  )
}

export default Data