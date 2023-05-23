import styles from './space.module.css'
export default function Space() {
  console.log(styles);
  return <main className="page-wrapper">
    <div className="space-landing">
      <section className={`${styles.header} text-white text-center`}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className="py-5">
            <img src='/images/space-landing/space_landing_header_logo.png'/>
          </div>
          <p className="display-3 fw-light"><span>Flexible Medical Rooms Rentals</span></p>
          <p className="fs-6 fw-normal">
            Establish Your Beverly Hills Presence - Flexible Medical Room Rentals for New and Expanding Practices
          </p>
          <p className="fs-7 fw-normal">
            <i>Medical Boulevard Inc.</i>
          </p>
          <a className="btn btn-primary">REQUEST A TOUR</a>
        </div>
      </section>
      <section className={`text-center welcome py-5`}>
        <div className={styles.content}>
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
                <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_1.png' className='img-responsive'/></div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={`${styles['welcome-box']} py-3`}>
                <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_2.png' className='img-responsive'/></div>
              </div>              
            </div>
            <div className='col-md-6'>
              <div className={`${styles['welcome-box']} py-3`}>
                <div className={`${styles['welcome-box-img-wrapper']}`}><img src='/images/space-landing/space_landing_welcome_3.png' className='img-responsive'/></div>
              </div>              
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>;
}