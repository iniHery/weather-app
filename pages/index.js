import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <body>
      {/* // Nav */}

      <div className="nav">
        <div className="nav-flex">
          <div className="wraper">
            <Link href="menu">
              <a>
                <Image width="24px" height="24px" src="/plus.png" alt="plus" />{" "}
              </a>
            </Link>
            <div className="description-nav">Kabupaten Gianyar</div>
            <div>
              <Image width="24px" height="24px" src="/menu.png" alt="plus" />
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
          <div style={{ marginRight: "6px" }}>Rincian Lainnya</div>
          <div>
            <Image
              width="10px"
              height="10px"
              className="icon-footer"
              src="/right-chevron.png"
              alt="right"
            />
          </div>
        </div>
      </div>

      <div className="wrapper-flex">
        <div className="items-footer">
          <Image
            width="38px"
            height="0px"
            marginRight="10px"
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
          <Image
            width="38px"
            height="0px"
            marginRight="10px"
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
          <Image
            width="38px"
            height="0px"
            marginRight="10px"
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
          <Image
            width="38px"
            height="0px"
            marginRight="10px"
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
      <div style={{ padding: "0px 24px" }}>
        <Image
          layout="responsive"
          width={700}
          height={393}
          src="/info.jpg"
          alt="info"
        />
      </div>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">Now</div>
              <div className="wrapper-articel">
                26<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
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
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">08:00</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">14.2km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">09:00</div>
              <div className="wrapper-articel">
                30<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/cloud.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">17.1km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">10:00</div>
              <div className="wrapper-articel">
                28<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/sun-white.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">21.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">11:00</div>
              <div className="wrapper-articel">
                18<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/rainy-sky.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">21.6km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">12:00</div>
              <div className="wrapper-articel">
                32<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/cloudy-day.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">37.2km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">01:00</div>
              <div className="wrapper-articel">
                22<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
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
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">02:00</div>
              <div className="wrapper-articel">
                20<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/cloudy-day.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">28.5km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">03:00</div>
              <div className="wrapper-articel">
                16<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/rainy-sky.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">32.9km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">04:00</div>
              <div className="wrapper-articel">
                18<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/cloud.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">23.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">05:00</div>
              <div className="wrapper-articel">
                16<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/rainy-sky.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">26.0km/j</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-block",
            width: "100px",
            marginRight: 10,
          }}
        >
          <div className="articel-display">
            <div className="articel">
              <div className="items">06:00</div>
              <div className="wrapper-articel">
                20<sup className="derajat">o</sup>
              </div>
              <div>
                <Image
                  width="34px"
                  height="34px"
                  src="/cloudy-day.png"
                  alt="cuaca"
                />
              </div>
              <div className="items">26.7km/j</div>
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
             width="34px" height="0px" src="/sun-white.png" alt="cuaca" />
          </div>
          <div className="items">13.0km/j</div>
        </div>

        <div className="articel">
          <div className="items">19.00</div>
          <div className="wrapper-articel">
            27<sup className="derajat">o</sup>
          </div>
          <div>
             width="34px" height="0px" src="/cloudy-day.png" alt="cuaca" />
          </div>
          <div className="items">11.1km/j</div>
        </div>
        <div className="articel">
          <div className="items">20.00</div>
          <div className="wrapper-articel">
            27<sup className="derajat">o</sup>
          </div>
          <div>
             width="34px" height="0px" src="/sun-white.png" alt="cuaca" />
          </div>
          <div className="items">11.0km/j</div>
        </div>
        <div className="articel">
          <div className="items">21.00</div>
          <div className="wrapper-articel">
            28<sup className="derajat">o</sup>
          </div>
          <div>
             width="34px" height="0px" src="/cloud.png" alt="cuaca" />
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
};

export default HomePage;
