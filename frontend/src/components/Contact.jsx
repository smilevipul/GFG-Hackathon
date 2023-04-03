import React from 'react'

const Contact = () => {
  return (
    <>

<section className="my-5 bg-light">
        <div className="text-center">
            <h1 className="display-6">Contact Us</h1>
            <hr className="w-25 mx-auto" />
        </div>

        <div className="container my-5 d-flex justify-content-center align-items-center">
            <div className="row mx-auto">
                <div className="col">
                    <form action="" className="mx-auto">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="Enter Your Name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com"/>
                        </div>

                        <div className="mb-3">
                            <label className="mr-3">Gender</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Male</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">Female</label>
                              </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleDataList" className="form-label">Choose City</label>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                            <datalist id="datalistOptions">
                              <option value="San Francisco"></option>
                              <option value="New York"></option>
                              <option value="Seattle"></option>
                              <option value="Los Angeles"></option>
                              <option value="Chicago"></option>
                            </datalist>

                        </div>
                        <div className="mb-3">
                            <label for="formFileSm" className="form-label">Upload Photo</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                          </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                            <label className="form-check-label" for="flexCheckChecked">
                              Checked checkbox
                            </label>
                          </div>
                          <button type="button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact