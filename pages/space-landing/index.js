import styles from './space.module.css'
export default function Space() {
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
    </div>
  </main>;
}