import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import SocialIcons from "./SocialIcons";

const ContactBody = () => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="contact-section">
        <ContactLeft />
        <ContactRight />
      </div>
      <SocialIcons />
    </div>
  );
};

export default ContactBody;
