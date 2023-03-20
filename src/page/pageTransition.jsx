import '../css/pageTransition.css'
function PageTransition(){
    return(
        <>
        <div class="page-wrapper">
        <div class="content-wrapper"> 
        <input type="radio" name="toggle" id="toggle1"></input>
        <input type="radio" name="toggle" id="toggle2"></input>
         <input type="radio" name="toggle" id="toggle3"></input>
            <section id="section-1">
                <div className="image-container">
                <img src="https://unsplash.it/500/600?image=939" alt=""/>
                </div>
                <div className="info-container">
                <h1>Hello.</h1>
                <label for="toggle2">Click Me.</label>
                </div>
            </section>
            <section id="section-2">
                <div className="image-container">
                <img src="https://unsplash.it/500/600?image=868" alt=""/>
                </div>
                <div className="info-container">
                <h1>Hello Again.</h1>
                <label for="toggle3">Click Me.</label>
                </div>
            </section>
            </div>
            </div>
        </>
    )


}



export default PageTransition