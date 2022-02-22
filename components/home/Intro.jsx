import Image from 'next/image'
import profilePic from '@/public/images/authors/hamed.png'

const Intro = () => {
  return (
    <section className="mb-16 flex flex-col-reverse items-start gap-8 md:flex-row">
      <div className="flex-1">
        <h1 className="mb-6 text-3xl font-bold">
          Hey, I&#39;m Hamed{' '}
          <span className="text-xl font-light text-react-link text-opacity-70">
            /hə.med/
          </span>
        </h1>
        <p className="text-gray-500">
          Welcome to my nook. Here, I try to document what I&#39;m learning
          and share stuff I&#39;ve been working on. May it help someone
          else in their journey.
        </p>
      </div>
      <Image
        className="flex-1 rounded-full"
        src={profilePic}
        alt="Picture of the author"
        width={115}
        height={115}
      />
    </section>
  )
}

export default Intro
