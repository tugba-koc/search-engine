import React from 'react';
import image from "../utils/img/address.png";
import styles from "./Location.module.scss"

const Location = () => {
    return (
        <div  className={styles.locationOuterWrapper}>
        <div className={styles.locationWrapper}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.content}>
            <p className={styles.address}>İletişim
                Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
            </p>
            <p className={styles.email}>Email: bilgi@tesodev.com</p>
            </div>
            <iframe className={styles.map} title='tesodev_address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470153137!2d28.88875941525181!3d41.019135279299675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1sen!2str!4v1661623628038!5m2!1sen!2str" width="600" height="450" loading="lazy"></iframe>
        </div>
        </div>
    )
}

export default Location