const Contact = () => {
  return (
    <div>
      <div className="w-[12rem] h-30 p-3 rounded-tr-xl rounded-bl-xl mb-8 bg-yellowpri text-center font-pop font-semibold text-xl">
        Contact Details
      </div>
      <div className="map flex flex-col w-full h-full justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.884492903174!2d72.8272574!3d19.1977247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1697536076356!5m2!1sen!2sin"
          width="80%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
