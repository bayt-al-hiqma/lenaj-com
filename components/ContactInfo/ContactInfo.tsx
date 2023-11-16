import styles from './contactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={`${styles.largeInfo} contact-info-lg`}>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 px-5">
                <p className="text-end p-0 m-0">+1 916 <span className="fw-800">220 2361</span> <img src="/assets/images/LENAJ-call-round_mustard-yellow-08.png" alt="" className="phone-logo"></p>
                <p className="text-end p-0 m-0">+1 916 <span className="fw-800">941 1408</span> <img src="/assets/images/LENAJ-whatsApp-round_mustard-yellow-09.png" alt="" className="phone-logo"></p>
                <p className="text-end p-0 m-0">+1 916 <span className="fw-800">638 2341</span> <img src="/assets/images/LENAJ-call-round_mustard-yellow-08.png" alt="" className="phone-logo"></p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 px-5">
                <p className="text-start m-0 text-mail-1"><span className="fw-800"><a href="mailto: orders@lenaj.com">orders</span>@lenaj.com</a> <img src="/assets/images/LENAJ-mail-round_mustard-yellow-10.png" alt="" className="phone-logo"></p>
                <p className="text-start p-0 m-0"><span className="fw-800"><a href="mailto: artwork@lenaj.com">artwork</span>@lenaj.com</a> <img src="/assets/images/LENAJ-mail-round_mustard-yellow-10.png" alt="" className="phone-logo"></p>
                <p className="text-start m-0 text-mail-3"><span className="fw-800"><a href="mailto: lee@lenaj.com">lee</span>@lenaj.com</a> <img src="/assets/images/LENAJ-mail-round_mustard-yellow-10.png" alt="" className="phone-logo"></p>
            </div>
        </div>
    </div>
  );
}

export default ContactInfo;