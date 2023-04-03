import React from 'react'
import himg  from "../images/about1.png";

const About = () => {
  return (
    <>

<section className="my-5">
    <div className="text-center">
        <h1 className="display-6">About Us</h1>
        <hr className="w-25 mx-auto" />
    </div>
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center ">
                <figure>
                    <img src={himg} alt="img" className="img-fluid about_img"/>
                </figure>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                <h1>Our Journey</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, iste ullam error
                    fugiat repellat quidem quisquam ad provident fugit veritatis architecto accusantium quibusdam
                    est assumenda ipsum neque veniam reprehenderit! Enim blanditiis rerum nemo fugiat magni saepe
                    repellendus molestias commodi. Aspernatur omnis consequuntur perferendis eos, fuga suscipit
                    voluptatem repellendus maxime!</p>
                <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip"
                    data-bs-placement="right" title="Who AM I">Check More</button>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div id="navbar-example" style={{position :"relative"}}>


                <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                    <a className="navbar-brand" href="#">About Us</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading1">First</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2">Second</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" style={{height: "300px" , overflow: "scroll"}}
                    data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                    <h4 id="scrollspyHeading1">First heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, rem. Aspernatur enim, odit
                        possimus quod sapiente impedit laboriosam voluptatum saepe dolore ea quae repudiandae
                        accusantium quas harum, maiores nostrum officia doloribus labore mollitia cum! Quis,
                        inventore repellendus? Quibusdam architecto quisquam amet aliquid error, tenetur, enim,
                        officia similique incidunt odio placeat!</p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quis facilis nesciunt amet
                        quod nulla exercitationem porro quae dolores autem perspiciatis, sunt odit? Provident
                        commodi ipsum fugit officiis quam ut qui alias illo possimus voluptas sunt minima quidem
                        reprehenderit odio numquam voluptatem architecto nostrum, doloribus voluptate ratione culpa
                        consectetur adipisci?</p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quidem officiis ad quibusdam
                        nulla. Quaerat incidunt tempore totam fugit eveniet doloribus delectus in velit corporis
                        eum, minus numquam qui consectetur eligendi sint libero, voluptates impedit quasi. Dolorum,
                        asperiores, saepe amet laudantium nemo et illum, corporis est enim quisquam aliquam ex?</p>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sequi sunt ducimus, ut
                        culpa, praesentium, aliquid nam in eaque ullam ratione voluptatem. Reiciendis aperiam at
                        repellat ratione saepe labore sequi? Doloribus adipisci itaque error facilis laboriosam
                        atque fugiat veritatis consectetur magnam, modi, et explicabo unde eius facere reiciendis
                        vitae nostrum!</p>
                    <h4 id="scrollspyHeading5">Fifth heading</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio provident ex molestias
                        quod laboriosam obcaecati quia sint amet, nulla cum non sed aspernatur dolores numquam magni
                        fugiat praesentium reprehenderit quo ut maiores. Cumque, dicta sunt harum doloremque soluta
                        illum illo ad sit at commodi velit, maiores impedit non ipsam. Aspernatur!</p>
                </div>


            </div>
        </div>
    </div>

</section>
    </>
  )
}

export default About