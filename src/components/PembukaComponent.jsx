import { useState } from "react";

import Bismillah from "../assets/bismillah.png";

const PembukaComponent = () => {
  const [open, setOpen] = useState(false);

  // const bukaUndangan = () => {
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   bukaUndangan();
  // }, []);

  return (
    <div
      className={open ? "pembuka w-100 min-vh-100 d-flex align-items-center justify-content-center position-fixed close" : "pembuka w-100 min-vh-100 d-flex align-items-center justify-content-center position-fixed"}
      style={{ zIndex: "9999", backgroundColor: "#fefae0" }}
    >
      <div className="text-center">
        <img src={Bismillah} alt="" className="bismillah" />
        <h1>Undangan Pernikahan</h1>
        <h1 className="nama mb-4 mt-3" style={{ fontFamily: "Great Vibes, cursive" }}>
          Hidmat & Neli
        </h1>
        <p className="text-decoration-underline m-0">Kepada Yth</p>
        <h2 className="mb-4">Bpk/Ibu/Saudara/i</h2>
        <p>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.</p>
        <button className="btn btn-success mt-3" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-envelope me-2"></i>Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default PembukaComponent;
