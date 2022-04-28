const Sidebar = () => (
  <aside className='sidebar-container container mx-3'>
    <div className='card p-4'>
      <h4 className='text-center'>I'm a Francis C. Ong</h4>
      <h6 className='text-center my-5'>& I'm a web Developer</h6>
      <h6 className='text-center'>
        <a target='_blank' href='https://imfranz25.github.io/francis-ong/' className='text-success email-me' rel="noreferrer">Visit my website portfolio here</a>
        <div>I'm please to here your feedbacks</div>
        <div>It means so much to me</div>
      </h6>
    </div>
    <div className='card p-4'>
      <h4 className='text-center'>Over 1 Million Monthly Readers</h4>
      <h6 className='text-center my-5'>Follow Us</h6>
      <h6 className='text-center'>
        <a href='mailto:francis.ong25@gmail.com' className='text-success email-me'>Join our email list here</a>
        <div>Get fresh content straight to your inbox</div>
        <div>from francis the great :)</div>
      </h6>
    </div>
    <div className='card p-r'>
      <div className='img-container'>
        <img alt="Start a Blog" src="https://makeawebsitehub.com/wp-content/uploads/2018/03/how-to-start-a-blog.jpg" />
      </div>
    </div>
  </aside>
)

export default Sidebar;