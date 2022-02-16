import Image from 'next/image'
import profilePic from '../../public/me.jpg'

const Hero = () => {
    return (
        <section className='mb-12 flex flex-col-reverse items-start md:flex-row gap-8'>
            <div className='flex-1'>
                <h1 className='text-3xl font-bold mb-6'>
                    Hey, I&#39;m Hamed{' '}
                    <span className='text-xl font-light text-react-link text-opacity-70'>
                        /hə.med/
                    </span>
                </h1>
                <p>
                    Welcome to my nook. Here, I try to document what I&#39;m learning and share
                    stuff I&#39;ve been working on. May it help future me or someone else in their
                    journey.
                </p>
            </div>
            <Image
                className='rounded-full flex-1'
                src={profilePic}
                alt='Picture of the author'
                width={125}
                height={125}
            />
        </section>
    )
}

export default Hero
