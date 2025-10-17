import styles from './OurService.module.css'
export default function OurServices() {
  return (
    <div className="section_one_content flex-full">
      <div className={styles.section_subtitle}>Our Services</div>
      <h2
        style={{
          backgroundColor: "yellow",
          color: "red",
          fontSize: "16px",
        }}
        className="section_title"
      >
        Responsive &amp; Professional
      </h2>
      <p className="section_desc">
        We go the extra mile on every project. The value we provide clients
        comes from our level of skill and performance, as well as our knowledge
        and professionalism. Rest assured, we put the same level of energy into
        every project we take on.
      </p>
      <div className="section_about_hotline">
        <strong className="hotline_title">Call us today</strong>
        <strong className="hotline_number">
          <i className="fa fa-phone"></i> 1900-111000
        </strong>
        <p className="section_desc">We're available 24/7, 365 days a year.</p>
      </div>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <label htmlFor="fname">First name:</label>
      <input onClick={() => {}} type="text" id="fname" name="fname" />
    </div>
  );
}
