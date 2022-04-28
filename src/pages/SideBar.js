const Sidebar = () => (
  <aside className='sidebar-container container mx-3'>
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