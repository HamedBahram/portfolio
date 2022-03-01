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
          Welcome to my digital nook. I&#39;m a web developer in the making
          and here, I share what I&#39;ve been working on and the things I
          learned along the way.
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
