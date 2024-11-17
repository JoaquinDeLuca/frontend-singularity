import { IconButton } from "../../buttons";

export function Footer() {
  return (
    <footer className={`bg-primary `}>
      <div className="max-w-screen-2xl m-auto py-8 px-10 flex flex-wrap justify-center md:justify-between gap-28">
        <div className='flex flex-col text-white text-lg gap-3'>
          <p className='text-tertiary  font-medium text-xl mb-4'>About</p>
          <p>Locations</p>
          <p>Franchise With Us</p>
          <p>Partners</p>
          <p>About Us</p>
          <p>Make Fetch Happen!</p>
        </div>
        <div className='flex flex-col text-white text-lg gap-3'>
          <p className='text-tertiary font-medium text-xl mb-4'>Resources</p>
          <p>Reviews</p>
          <p>Pet Resource Center</p>
          <p>Media Fact Sheet</p>
          <p>Blog</p>
          <p>News</p>
        </div>
        <div className='flex flex-col text-white text-lg gap-3'>
          <p className='text-tertiary font-medium text-xl mb-4'>-</p>
          <p>Gift Cards</p>
          <p>Services</p>
          <p>Franchisee Login</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
        <div className='flex flex-col text-white text-lg gap-3'>
          <p className='text-tertiary font-medium text-xl mb-4'>NewsLetter</p>
          <p>Sign up to receive the Fetch!</p>
          <p>Family Newsletter</p>
          <IconButton placeholder="Email Adress" />
        </div>
      </div>
    </footer>
  )
}
