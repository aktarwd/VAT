import Image from 'next/image'
import profilePic from '../public/me.png'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}