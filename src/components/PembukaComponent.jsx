import { useState } from "react";

import Bismillah from "../assets/bismillah.png";

const PembukaComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={open ? "pembuka w-100 min-vh-100 d-flex align-items-center justify-content-center position-fixed close" : "pembuka w-100 min-vh-100 d-flex align-items-center justify-content-center position-fixed"}
      style={{ zIndex: "9999", backgroundColor: "#fefae0" }}
    >
      <div className="text-center">
        <img src={Bismillah} alt="" className="bismillah animate__animated animate__fadeInUp" />
        <h1 className="undangan animate__animated animate__fadeInUp animate__delay-1s">Undangan Pernikahan</h1>
        <h1 className="nama mb-4 mt-3 animate__animated animate__fadeInUp animate__delay-1s" style={{ fontFamily: "Great Vibes, cursive" }}>
          Muhib & Isti
        </h1>
        <p className="text-decoration-underline m-0 animate__animated animate__fadeInUp animate__delay-1s terhormat">Kepada Yth</p>
        <h2 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s nama-terhormat">Bpk/Ibu/Saudara/i</h2>
        <p className="animate__animated animate__fadeInUp animate__delay-1s ucapan">Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.</p>
        <button className="btnOpen btn btn-success mt-3 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-envelope me-2"></i>Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default PembukaComponent;
