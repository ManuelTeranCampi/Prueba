import Image from "next/image";
import Link from "next/link";

const CardTendenciaYoutube = ({ video: { id, title, snippet } }) => {
  return (
    <div className="card-group  px-0 ">
      <div className="card bg-transparent border-0 mb-3">
        <div className="row g-0 ">
          <div className="col-4 col-md-4 col-lg-4 col-xl-4 " id="padre">
            <Link
              href={`/tendencia/${
                snippet.resourceId.videoId
              }?titulo=${snippet.title.split(" ").join("-")}`}
            >
              <a>
                <Image
                  className="img-fluid rounded-start "
                  height={70}
                  width={100}
                  src={snippet.thumbnails.medium.url}
                  objectFit="fill"
                  alt="foto referencia"
                  //   layout="responsive"
                  priority
                />
              </a>
            </Link>
          </div>
          <div className="col-1 card-title d-inline-flex">
            <p className="fs-1 bg-dark mb-0 rounded d-inline-flex">
              <b className="mx-2 py-2 text-white ">{snippet.position}</b>
            </p>
          </div>

          <div className="col-8 col-md-6 col-lg-8 col-xl-6 my-auto ">
            <div className="card-body pe-0">
              <h6 className="card-text">
                {/* <Link
                    href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
                  > */}
                <Link
                  href={`/tendencia/${
                    snippet.resourceId.videoId
                  }?titulo=${snippet.title.split(" ").join("-")}`}
                >
                  <a>
                    <h6>{snippet.title}</h6>
                  </a>
                </Link>
                {/* ////////TODO: prueba con id tendencias////////// */}
                {/* <Link
                                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                                > */}
                {/* <Link href={`/tendencias/${resourceId.videoId}`}> */}

                <a>
                  <h6>{title}</h6>
                </a>
                {/* </Link> */}
                {/* ////////prueba con id tendencias////////// */}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #padre {
          position: relative; /* para poder posicionar el texto de forma absoluta */
          display: inline-block;
        }

        .card-title {
          position: absolute; /* posición absolute con respecto al padre */
          bottom: 10; /* posicionada en la esquina inferior derecha */
          /* right: -0rem; */
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default CardTendenciaYoutube;
