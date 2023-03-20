import '../css/translate.css';
import entryImg from '../assets/entry.jpg';

function translate() {
  return (
  // <div classNameName="flex justify-around text-primary h-[100vh] items-center
  //  bg-secondary translate-x-[50vw] relative eas"
  // >
    <>
      <div className="container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>
                Hi ，
              </h1>
              <h1>
                This is Derrick's Blog
              </h1>
            </div>
            <div className="btns">
              <button className="btns_more"> See more </button>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img src={entryImg} alt="" className="container_img" />
          </div>
        </div>
      </div>
      <div className="overlay" />
    </>
  );
}

export default translate;
