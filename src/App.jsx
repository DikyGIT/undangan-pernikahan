import { useState, useRef, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Container, Row, Col } from "react-bootstrap";

import AudioPlayer from "react-h5-audio-player";
import Music from "./assets/music.ogg";
import "react-h5-audio-player/lib/styles.css";

import PembukaComponent from "./components/PembukaComponent";

import HeroImg from "./assets/hero-img.webp";
import Bismillah from "./assets/bismillah.webp";
import Cincin from "./assets/cincin.webp";
import Love from "./assets/resepsi.png";
import Pria from "./assets/mempelai-pria.webp";
import Wanita from "./assets/mempelai-wanita.webp";
// import BRI from "./assets/bri.webp";
// import BSI from "./assets/bsi.webp";
import Dana from "./assets/dana.webp";

import Ornament2 from "./assets/ornament/ornament-2.png";
import OrnamentAtas from "./assets/ornament/ornament-atas-2.png";
import OrnamentBawah from "./assets/ornament/ornament-bawah-2.png";

function App() {
  const [timerHari, setTimerHari] = useState("00");
  const [timerJam, setTimerJam] = useState("00");
  const [timerMenit, setTimerMenit] = useState("00");
  const [timerDetik, setTimerDetik] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("June 01, 2025 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHari(hari);
        setTimerJam(jam);
        setTimerMenit(menit);
        setTimerDetik(detik);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    const a = clearInterval(interval.current);
    return () => {
      a;
    };
  });

  const [copied, setCopied] = useState(false);
  const rekening = "0857031912539";

  // const [copied2, setCopied2] = useState(false);
  // const rekening2 = "1220644685";

  const changeMusicBg = () => {
    if (open) {
      document.querySelector(".rhap_container").classList.replace("rhap_play-status--paused", "rhap_play-status--playing");
    }
  };

  useEffect(() => {
    changeMusicBg();
  });

  return (
    <div className="position-relative">
      {/* Pembuka */}
      <PembukaComponent />

      <div className="audio">
        <p className="text-secondary">play</p>
        <AudioPlayer autoPlay loop src={Music} />
      </div>

      {/* Navbar */}

      <section className="page-awal mx-auto py-5 position-relative">
        <img src={OrnamentAtas} alt="" className="ornament-atas" />
        <Container>
          <Row className="px-5">
            <Col className="text-center">
              <img src={Bismillah} alt="bismillah.png" className="bismillah mb-4" />
              <p className="lh-lg">Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara kami</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img src={HeroImg} alt="pengantin.png" className="hero" />
              <div className="d-flex gap-md-4 gap-2 justify-content-center mt-5">
                <div className="hari bg-black text-white">
                  <h1>{timerHari}</h1>
                  <p className="m-0">Hari</p>
                </div>

                <div className="jam bg-black text-white">
                  <h1>{timerJam}</h1>
                  <p>Jam</p>
                </div>

                <div className="menit bg-black text-white">
                  <h1>{timerMenit}</h1>
                  <p>Menit</p>
                </div>

                <div className="detik bg-black text-white">
                  <h1>{timerDetik}</h1>
                  <p>Detik</p>
                </div>
              </div>
              <h2 className="mt-5">Ahad, 01 Juni 2025</h2>
            </Col>
          </Row>
        </Container>
        <img src={OrnamentBawah} alt="" className="ornament-bawah" />
      </section>
      <section className="surat w-100 d-flex align-items-center" style={{ minHeight: "50vh", backgroundColor: "#22223b" }}>
        <Container>
          <Row>
            <Col>
              <p className="text-center lh-lg text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                “Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa Kasih Dan Sayang.
                Sungguh, Pada Yang Demikian Itu Benar-benar Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir” <br /> {"Q.S : Ar-Rum (30) : 21"}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mempelai min-vh-100 mx-auto position-relative">
        <img src={Ornament2} alt="" className="ornament-atas" />
        <Container>
          <Row className="pt-md-5 pt-3">
            <Col className="text-center">
              <p className="fw-semibold py-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Putra Putri Kami
              </p>
              <img src={Pria} alt="" width="200px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" />
              <p className="nama-mempelai fw-bold" style={{ fontFamily: "Great Vibes, cursive" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                M. Faqih Muhtadi
              </p>
              <p className="fs-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                Putra Dari : <br /> Bapak Hirman
                <br /> & <br />
                Ibu Dae Haelayawati
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h1 className="py-5" style={{ fontSize: "100px", fontFamily: "Great Vibes, cursive" }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                &
              </h1>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="text-center">
              <img src={Wanita} alt="" width="200px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" />
              <p className="fw-bold nama-mempelai" style={{ fontFamily: "Great Vibes, cursive" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                Fitri Nurlela
              </p>
              <p className="fs-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                Putri Dari : <br /> Bapak Mahrodin <br /> & <br />
                Ibu Roroh
              </p>
            </Col>
          </Row>
        </Container>
        <img src={Ornament2} alt="" className="ornament-bawah" />
      </section>

      <section className="acara min-vh-100 py-5 mx-auto">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="fs-4 fw-bold py-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                Insya Allah Acara Akan <br /> Dilaksanakan Pada :
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="text-center">
              <img src={Cincin} alt="" className="mb-4" style={{ width: "100px" }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" />
              <h1 className="mb-3" style={{ fontFamily: "Great Vibes, cursive" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                Akad Nikah
              </h1>
              <p className="fw-semibold fs-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <i className="fa-solid fa-calendar-days me-2 fs-3 text-success"></i>Ahad, 01 Juni 2025
              </p>
              <p className="fw-semibold fs-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                <i className="fa-solid fa-clock me-2 fs-3 text-success"></i>Pukul : 08.00 s/d 10.00 WIB
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img src={Love} alt="" className="mb-3" style={{ width: "100px" }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" />
              <h1 className="my-3" style={{ fontFamily: "Great Vibes, cursive" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                Resepsi
              </h1>
              <p className="fw-semibold fs-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                <i className="fa-solid fa-calendar-days me-2 fs-3 text-success"></i>Ahad, 01 Juni 2025
              </p>
              <p className="fw-semibold fs-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                <i className="fa-solid fa-clock me-2 fs-3 text-success"></i>Pukul : 10.00 - Selesai WIB
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="text-center">
              <p className="fs-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                Bertempat Di
              </p>
              <p className="fs-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                Rumah Mempelai Wanita
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.978624991624!2d107.56267677500178!3d-7.4676116925440095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjgnMDMuNCJTIDEwN8KwMzMnNTQuOSJF!5e0!3m2!1sid!2sid!4v1747133278252!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: "5px solid #0D6EFD" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-5">
              <a className="btn btn-primary btn-lg" target="_blank" href="https://maps.app.goo.gl/XUvSPje98iEBtDQ4A" rel="noreferrer">
                <i className="fa-solid fa-location-dot me-2"></i>Lihat Lokasi
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gift min-vh-100 py-5 mx-auto">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h1 style={{ fontFamily: "Great Vibes, cursive" }} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                Wedding Gift
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="text-center">
              <img src={Dana} alt="gambar" className="mb-3" />
              <div className={copied ? "discount-code discount-applied" : "discount-code"}>
                <div className="black-code">{rekening}</div>
                {copied ? (
                  <div className="discount-copied">Copied!</div>
                ) : (
                  <CopyToClipboard text={rekening} onCopy={() => setCopied(true)}>
                    <div className="copy">Copy</div>
                  </CopyToClipboard>
                )}
              </div>
              <h3 className="fw-bold mt-3">An. Fitri Nurlela</h3>
            </Col>
          </Row>
          {/* <Row>
            <Col className="text-center">
              <img src={BSI} alt="gambar" className="mb-3 bca" />
              <div className={copied2 ? "discount-code2 discount-applied2" : "discount-code2"}>
                <div className="black-code2">{rekening2}</div>
                {copied2 ? (
                  <div className="discount-copied2">Copied!</div>
                ) : (
                  <CopyToClipboard text={rekening2} onCopy={() => setCopied2(true)}>
                    <div className="copy2">Copy</div>
                  </CopyToClipboard>
                )}
              </div>
              <h3 className="fw-bold mt-3">An. Any Maryani</h3>
            </Col>
          </Row> */}
        </Container>
      </section>

      <section className="penutup py-5 mx-auto" style={{ backgroundColor: "#22223b" }}>
        <Container>
          <Row>
            <Col className="text-center text-white">
              <p className="lh-lg">Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk Memberikan Do’a Restu Kepada Kami</p>
              <h1 style={{ fontFamily: "Great Vibes, cursive" }}>Faqih & Fitri</h1>
              <p>Ahad, 01 Juni 2025</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
