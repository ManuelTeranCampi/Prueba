import ReactPlayer from "react-player";
import { FacebookButton, FacebookCount } from "react-social";
import Layout from "../../components/Layout";
// import Head from "next/head";
import Image from "next/image";

import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const TendenciasId = ({ results }) => {
  console.log(results);

  const shareUrl = `https://prueba-ashy-seven.vercel.app/tendencia/${results.items[0].snippet.resourceId.videoId}`;

  // const shareUrlImage = `${results.items[0].snippet.thumbnails.high.url}/maxresdefault.jpg`;
  console.log(shareUrl);
  // console.log(shareUrlImage);
  // https://i.ytimg.com/vi/5o7eugksfo8/maxresdefault.jpg
  const typesitio = "website";
  const app_id_face = "366457178537551";
  return (
    <>
      <Layout
        title={results.items[0].snippet.title + " | SerpelFlow"}
        description="Serpelfow, Lo último en Noticias, Fotos, Videos y Música de
        los artistas de Reggaeton, Trap y Urbano."
        image={results.items[0].snippet.thumbnails.maxres.url}
        url={`https://prueba-ashy-seven.vercel.app/tendencia/${results.items[0].snippet.resourceId.videoId}`}
        app_id={app_id_face}
        type={typesitio}
      ></Layout>
      {/* <Head>
        <meta
          property="og:image"
          content={results.items[0].snippet.thumbnails.medium.url}
        />
      </Head> */}
      <main>
        <div className="container px-0">
          <h1>
            {results.items[0].snippet.title}
            <br></br>
            Posicion {results.items[0].snippet.position} en tendencias
          </h1>

          <div>
            <FacebookShareButton
              className="float-end mx-1"
              title={"Facebook"}
              url={shareUrl}
              image={results.items[0].snippet.thumbnails.maxres.url}
              quote={results.items[0].snippet.title}
              hashtag={"#reggaeton"}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              className="float-end mx-1"
              url={shareUrl}
              image={results.items[0].snippet.thumbnails.maxres.url}
              title={"WhatsApp"}
              separator=": "
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <Image
              className="img-fluid rounded-start "
              height={70}
              width={100}
              src={results.items[0].snippet.thumbnails.maxres.url}
              objectFit="fill"
              alt="foto referencia"
              priority
            />
            <FacebookMessengerShareButton
              className="float-end mx-1"
              url={shareUrl}
              image={results.items[0].snippet.thumbnails.maxres.url}
              appId="366457178537551"
            >
              <FacebookMessengerIcon size={40} round={true} />
            </FacebookMessengerShareButton>

            <TwitterShareButton
              className="float-end mx-1"
              title={"Serpelflow"}
              url={shareUrl}
              image={results.items[0].snippet.thumbnails.maxres.url}
              quote={results.items[0].snippet.title}
              hashtag={"#reggaeton"}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>

          <div className="player-wrapper mb-4 container-fluid float-start col-12 col-lg-12 col-md-12 col-xl-6 px-0 mx-auto ">
            <ReactPlayer
              controls
              url={`https://www.youtube.com/watch?v=${results.items[0].snippet.resourceId.videoId}`}
            />
          </div>
          <div className="container mt-0 mb-4 col-md-12 col-lg-6  d-flex justify-content-center  mx-auto"></div>
        </div>
      </main>
      {/* </Layout> */}
      <style jsx>{`
        .titu {
          padding: 0 1rem;
          border-bottom: 1px solid #474a4d;
        }
        .tituarriba {
          padding: 0 1rem;
          border-top: 1px solid #474a4d;
        }
        .player-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};
export default TendenciasId;

export async function getServerSideProps(params) {
  try {
    const { id } = params.query;
    const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&videoId=${id}&key=${API_KEY}`;
    // const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`;
    const response = await fetch(REQUEST_URL);
    const results = await response.json();
    console.log(results);

    return {
      props: { results },
    };
  } catch (error) {
    // console.log(error);
    if (error.kind === "ObjectId") {
      return { props: { success: false, error: "id no válido" } };
    }
    return { props: { success: false, error: "Error de servidor" } };
  }
}
