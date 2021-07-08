import Link from "next/link";
export default function Home() {
  return (
    <body>
      {/* // Nav */}

      <div className="nav">
        <div className="nav-flex">
          <div className="wraper">
            <Link href="menu">
              <a>
                <img style={{ width: "24px" }} src="/plus.png" alt="plus" />{" "}
              </a>
            </Link>
            <div className="description-nav">Gianyar</div>
            <div>
              <img style={{ width: "24px" }} src="/menu.png" alt="plus" />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="bottom-nav">
          <div>Hidupkan layanan lokasi</div>
        </div>
      </div>
      {/* End Nav */}

      {/* Content */}

      <div style={{ paddingTop: "170px", paddingBottom: "100px" }}>
        <div className="display">
          <div className="celsius-content">
            <div style={{ fontSize: "140px" }}>30</div>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>
              <sup>o</sup>
            </div>
            <div style={{ fontSize: "40px", fontWeight: "bold" }}>
              <sup>C</sup>
            </div>
          </div>
        </div>

        <div>
          <div className="hero">Cerah</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <div className="bottom-content">IKU 24</div>
          </div>
        </div>
      </div>

      {/* End Content */}

      {/* Footer */}

      <div>
        <div className="flex-footer">
          <div>Rincian Lainnya</div>
          <div>
            <img className="icon-footer" src="/right-chevron.png" alt="right" />
          </div>
        </div>
      </div>

      <div className="wrapper-flex">
        <div className="items-footer">
          <img
            style={{ width: "38px", marginRight: "10px" }}
            src="/sun-white.png"
            alt="sun"
          />
          <div>
            Hari Ini <span className="span">-</span> Cerah
          </div>
        </div>
        <div>
          27<sup className="suhu">o</sup> / 30<sup className="suhu">o</sup>
        </div>
      </div>

      <div className="wrapper-flex">
        <div className="items-footer">
          <img
            style={{ width: "38px", marginRight: "10px" }}
            src="/cloudy-day.png"
            alt="sun"
          />
          <div>
            Besok <span className="span">-</span> Berawan
          </div>
        </div>
        <div>
          19<sup className="suhu">o</sup> / 21<sup className="suhu">o</sup>
        </div>
      </div>

      <div className="wrapper-flex">
        <div className="items-footer">
          <img
            style={{ width: "38px", marginRight: "10px" }}
            src="/sun-white.png"
            alt="sun"
          />
          <div>
            Rab <span className="span">-</span> Cerah
          </div>
        </div>
        <div>
          25<sup className="suhu">o</sup> / 27<sup className="suhu">o</sup>
        </div>
      </div>

      <div className="wrapper-flex">
        <div className="items-footer">
          <img
            style={{ width: "38px", marginRight: "10px" }}
            src="/cloudy-day.png"
            alt="sun"
          />
          <div>
            Kam <span className="span">-</span> Berawan
          </div>
        </div>
        <div>
          20<sup className="suhu">o</sup> / 23<sup className="suhu">o</sup>
        </div>
      </div>

      <div className="flex-menu">
        <div className="bottom-footer">
          <div>Ramalan 7 hari</div>
        </div>
      </div>

      {/* End Footer */}

      {/* Articel */}
      <div>
        <div>
          <img className="img-center" src="/info.jpg" />
        </div>
      </div>

      <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            height: 100,
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <img
                  style={{ width: "34px" }}
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">13.0km/j</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="articel-display">
        <div className="articel">
          <div className="items">Now</div>
          <div className="wrapper-articel">
            28<sup className="derajat">o</sup>
          </div>
          <div>
            <img style={{ width: "34px" }} src="/sun-white.png" alt="cuaca" />
          </div>
          <div className="items">13.0km/j</div>
        </div>

        <div className="articel">
          <div className="items">19.00</div>
          <div className="wrapper-articel">
            27<sup className="derajat">o</sup>
          </div>
          <div>
            <img style={{ width: "34px" }} src="/cloudy-day.png" alt="cuaca" />
          </div>
          <div className="items">11.1km/j</div>
        </div>
        <div className="articel">
          <div className="items">20.00</div>
          <div className="wrapper-articel">
            27<sup className="derajat">o</sup>
          </div>
          <div>
            <img style={{ width: "34px" }} src="/sun-white.png" alt="cuaca" />
          </div>
          <div className="items">11.0km/j</div>
        </div>
        <div className="articel">
          <div className="items">21.00</div>
          <div className="wrapper-articel">
            28<sup className="derajat">o</sup>
          </div>
          <div>
            <img style={{ width: "34px" }} src="/cloud.png" alt="cuaca" />
          </div>
          <div className="items">11.6km/j</div>
        </div>
      </div> */}

      <div className="display-assets">
        <div className="assets">
          <div>
            Terasa seperti
            <div className="wrapper-articel">
              26 <sup className="derajat">o</sup>C
            </div>
          </div>
          <div>
            Kelembaban
            <div className="wrapper-articel">93%</div>
          </div>
        </div>

        <div className="assets">
          <div>
            Peluang hujan
            <div className="wrapper-articel">18%</div>
          </div>
          <div>
            Tekanan
            <div className="wrapper-articel">
              1012<sup style={{ fontSize: "14px", padding: "3px" }}>mbar</sup>
            </div>
          </div>
        </div>

        <div className="assets">
          <div>
            Kecepatan angin
            <div className="wrapper-articel">11.4km/j</div>
          </div>
          <div style={{ padding: "0px 14px" }}>
            Index (UV)
            <div className="wrapper-articel">0</div>
          </div>
        </div>
      </div>

      {/* End Articel */}
    </body>
  );
}
