import { ReactNode, useCallback, useState } from "react"
import RequestTourModal from "./RequestTourModal"
import styles from './space.module.css'
const Space = () => {
  const [requestTourShow, setRequestTourShow] = useState(false)
  const handleRequestTourShow = () => setRequestTourShow(true)
  const handleRequestTourClose = useCallback(() => setRequestTourShow(false), []);

  return (
    <>
      <RequestTourModal
        centered
        size='lg'
        show={requestTourShow}
        onHide={handleRequestTourClose}
      // onSwap={handleSignInToUp} />
      />
      <main className="page-wrapper">
        <div className="space-landing">
          <section className={`${styles.header} text-white text-center`}>
            <div className={styles.overlay}></div>
            <div className={styles.wrapper}>
              <div className="py-5">
                <img src='/images/space-landing/space_landing_header_logo.png' />
              </div>
              <p className="display-3 fw-light"><span>Flexible Medical Rooms Rentals</span></p>
              <p className="fs-6 fw-normal">
                Establish Your Beverly Hills Presence - Flexible Medical Room Rentals for New and Expanding Practices
              </p>
              <p className="fs-7 fw-normal">
                <i>Medical Boulevard Inc.</i>
              </p>
              <button className="btn btn-primary" onClick={handleRequestTourShow}>REQUEST A TOUR</button>
            </div>
          </section>
          <section className={`text-center welcome py-5`}>
            <div className={styles.wrapper}>
              <h1 className='display-3 fw-light text-primary'><i>Welcome </i>HOME</h1>
              <p className="fs-6 fw-normal">This remarkable contemporary French-Caribbean estate development offer breathtaking views of the ocean, mountains, and city. It features a unique and functional floor plan. Beautiful landscaping and impeccable workmanship makes it a truly valuable property investment.</p>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={`${styles['welcome-box']} py-3`}>
                    <div className={`${styles['welcome-box-img-wrapper']}`}>
                      <div className={`${styles.card} text-start py-4`}>
                        <p className='h3 text-white fw-light'><i>Medical </i> Rooms</p>
                        <p className='h5 text-white fw-light mb-1'>Welcoming Reception</p>
                        <p className='h5 text-white fw-light mb-1'>Spacious rooms: (about 95 ft²)</p>
                        <p className='h5 text-white fw-light mb-1'>Double Sink (one for patients)</p>
                        <p className='h5 text-white fw-light mb-4'>Advanced Treatment Chair</p>
                        <a href='https://space.medicalblvd.com/clkn/rel/a-11-lightbox.html' className='btn btn-outline-danger'>SEE MORE DETAILS</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className={`${styles['welcome-box']} py-3`}>
                    <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_1.png' className='img-responsive' /></div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className={`${styles['welcome-box']} py-3`}>
                    <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_2.png' className='img-responsive' /></div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className={`${styles['welcome-box']} py-3`}>
                    <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_3.png' className='img-responsive' /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.practice} text-white text-center`}>
            <div className={styles.overlay}></div>
            <div className={`${styles.wrapper} py-5`}>
              <p className="display-3 fw-light"><span><i>discover</i> YOUR PRACTICE</span></p>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/lU_JVc5-Wwc?wmode=opaque"></iframe>
            </div>
          </section>
          <section className={`${styles.contact} py-5`}>
            <div className={`${styles.wrapper}`}>
              <div className='row'>
                <div className='col-md-6'>
                  <iframe width="100%" height="360" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.082201188671!2d-118.3884313!3d34.067406999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b956a6a2c283%3A0x2713fca68adc1d52!2s9025%20Wilshire%20Blvd%2C%20Beverly%20Hills%2C%20CA%2090211!5e0!3m2!1sen!2sus!4v1680574198044!5m2!1sen!2sus"></iframe>
                </div>
                <div className='col-md-6'>
                  <p className='h3 text-white fw-light'><i>our </i> LOCATION</p>
                  <p className='h5 text-white fw-light mb-3'>Our medical spaces are located at 90025 Wilshire Boulevard #202</p>
                  <p className='h5 text-white fw-light mb-5'>Beverly Hills, Califonia 90211</p>
                  <p className='h5 fw-light'><a href='https://space.medicalblvd.com/clkn/https/goo.gl/maps/TGihbDR6sHw' className='text-white'>View us on Google maps</a></p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.intro} py-5`}>
            <div className={`${styles.wrapper}`}>
              <div className={`${styles['intro-wrapper']}`}>
                <div className='row'>
                  <div className='col-md-6'>
                    <img src="/images/space-landing/space_landing_intro.png" />
                  </div>
                  <div className='col-md-6'>
                    <p className='h3 fw-light'>Margarita Nicolas</p>
                    <p className='h6 fw-light mb-5'>Your trusted Medical Space Coordinator</p>
                    <p className='h6 fw-light mb-5'>Rita combines her real estate background and customer service skills to offer a seamless rental experience at Medical Boulevard. As our Medical Space Coordinator, she expertly guides clients and fosters lasting relationships, ensuring satisfaction in our flexible spaces.</p>
                    <p className='mb-5'><i className={`${styles['phone-icon']} fi-phone`}></i> (310) 800-2262</p>
                    <p><button className='btn btn-danger'>REQUEST A TOUR</button></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.footer} py-4`}>
            <div className={`${styles.wrapper}`}>
              <span className='fw-light text-white'>© Medical Boulevard Inc.</span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Space;