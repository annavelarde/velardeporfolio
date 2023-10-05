import "./Contact.css";
import data from "../../data.json";
import ReactTyped from "react-typed";

function Contact() {
  // console.log(data);

  return (
    <div className="backgroundContact">
      <div className="containerElements">
        <div className="headerContact">
          <h1 className="titleContact">
            Contact Us. {""}
            <ReactTyped
              strings={[
                "Have any questions?",
                "I would love to hear from you.",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </h1>
          <p className="pContact">
            Am if number no up period regard sudden better. Decisively
            surrounded all admiration and not you. Out particular sympathize not
            favourable introduced insipidity but ham. Rather number can and set
            praise. Distrusts an it contented perceived attending oh. Thoroughly
            estimating introduced stimulated why but motionless. Unpacked
            reserved sir offering bed judgment may and quitting speaking. Is do
            be improved raptures offering required in replying raillery. Stairs
            ladies friend by in mutual an no. Mr hence chief he cause. Whole no
            doors on hoped. Mile tell if help they ye full name. Needed feebly
            dining oh talked wisdom oppose at.
          </p>
        </div>
        <div className="divContainer">
          <ul className="ulContainer">
            {data.user.contacts.map((contact) => {
              console.log(contact);
              switch (contact.icon) {
                case "fa fa-github-alt":
                  return (
                    <li className="ilContainer" key={contact.id}>
                      <a href={contact.url}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-github-alt"></span>
                      </a>
                    </li>
                  );
                // break;
                case "fa fa-envelope":
                  return (
                    <li className="ilContainer" key={contact.id}>
                      <a href={contact.url}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-envelope"></span>
                      </a>
                    </li>
                  );
                // break;
                case "fa fa-linkedin":
                  return (
                    <li className="ilContainer" key={contact.id}>
                      <a href={contact.url}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-linkedin"></span>
                      </a>
                    </li>
                  );
                // break;
                default:
                  break;
              }
            })}
          </ul>
        </div>
        <p className="footerp">© 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
