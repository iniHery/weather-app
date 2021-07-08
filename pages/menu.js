import Link from "next/link";
export default () => {
  return (
    <>
      <div className="nav-menu">
        <Link href="/">
          <a>
            <img style={{ width: "24px" }} src="/left-arrow.png" alt="left" />{" "}
          </a>
        </Link>
      </div>

      <div className="nav-menu">Kelola Kota</div>

      <div className="menu">
        <img
          style={{ width: "18px", marginRight: "14px" }}
          src="/search.png"
          alt="left"
        />
        <input
          style={{ background: "transparent", border: "none", width: "100%" }}
          placeholder="Masukan lokasi"
        />
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Badung</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 20
            <span style={{ marginLeft: "16px" }}>
              29<sup className="sup">o</sup>/ 30<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          28
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Bangli</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 22
            <span style={{ marginLeft: "16px" }}>
              25<sup className="sup">o</sup>/ 28<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          27
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Buleleng</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 19
            <span style={{ marginLeft: "16px" }}>
              20<sup className="sup">o</sup>/ 24<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          21
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Gianyar</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 26
            <span style={{ marginLeft: "16px" }}>
              25<sup className="sup">o</sup>/ 26<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          25
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Jembrana</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 23
            <span style={{ marginLeft: "16px" }}>
              27<sup className="sup">o</sup>/ 29<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          28
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Karangasem</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 24
            <span style={{ marginLeft: "16px" }}>
              18<sup className="sup">o</sup>/ 24<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          19
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Klungkung</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 20
            <span style={{ marginLeft: "16px" }}>
              28<sup className="sup">o</sup>/ 29<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          28
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Tabanan</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 19
            <span style={{ marginLeft: "16px" }}>
              18<sup className="sup">o</sup>/ 21<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          20
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div>Kabupaten Denpasar</div>
            <div>
              <img
                style={{ width: "16px", marginLeft: "8px" }}
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 18
            <span style={{ marginLeft: "16px" }}>
              25<sup className="sup">o</sup>/ 30<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          27
          <div className="derajat-menu">o</div>
        </div>
      </div>
    </>
  );
};
