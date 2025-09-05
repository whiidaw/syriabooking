import "./ContactUs.css"

const ContactUs= () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Contact us!</h1>
      <span className="mailDesc">Share Us Youre Ideas</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Message" />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ContactUs