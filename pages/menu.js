import Link from "next/link";
import Image from "next/image";

const MenuPage = () => {
  return (
    <>
      <div className="nav-menu">
        <Link href="/">
          <a>
            <Image
              height="24px"
              width="24px"
              src="/left-arrow.png"
              alt="left-arrow"
            />
          </a>
        </Link>
      </div>

      <div className="nav-menu">Kelola Kota</div>

      <div className="menu">
        <Image width="18px" height="14px" src="/search.png" alt="left" />
        <input
          style={{
            background: "transparent",
            border: "none",
            width: "100%",
            marginLeft: "14px",
          }}
          placeholder="Masukan lokasi"
        />
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div style={{ marginRight: "6px" }}>Kabupaten Badung</div>
            <div>
              <Image width="14px" height="14px" src="/maps.png" alt="maps" />
            </div>
          </div>
          <div className="span-menu">
            IKU 20
            <span style={{ marginLeft: "14px" }}>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Bangli</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 22
            <span style={{ marginLeft: "14px" }}>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Buleleng</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 19
            <span style={{ marginLeft: "14px" }}>
              214<sup className="sup">o</sup>/ 24<sup className="sup">o</sup>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Gianyar</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 24
            <span style={{ marginLeft: "14px" }}>
              27<sup className="sup">o</sup>/ 30<sup className="sup">o</sup>
            </span>
          </div>
        </div>
        <div className="suhu-menu">
          30
          <div className="derajat-menu">o</div>
        </div>
      </div>

      <div className="component">
        <div style={{ margin: "32px 22px" }}>
          <div className="isi-component">
            <div style={{ marginRight: "6px" }}>Kabupaten Jembrana</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 23
            <span style={{ marginLeft: "14px" }}>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Karangasem</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 24
            <span style={{ marginLeft: "14px" }}>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Klungkung</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 20
            <span style={{ marginLeft: "14px" }}>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Tabanan</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 19
            <span style={{ marginLeft: "14px" }}>
              18<sup className="sup">o</sup>/ 21<sup className="sup">o</sup>
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
            <div style={{ marginRight: "6px" }}>Kabupaten Denpasar</div>
            <div>
              <Image
                width="14px"
                height="14px"
                marginLeft="8px"
                src="/maps.png"
                alt="maps"
              />
            </div>
          </div>
          <div className="span-menu">
            IKU 18
            <span style={{ marginLeft: "14px" }}>
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

export default MenuPage;
