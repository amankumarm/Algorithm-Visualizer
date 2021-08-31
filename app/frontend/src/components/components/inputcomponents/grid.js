import React, { Component } from 'react'

export class HomeGrid extends Component {
    render() {
        return (
<div class="container">
      <div class="row my-5">
        <div class="col-md-12 text-center">
          <h1 class="font-weight-bold">Hi Customer !</h1>
        </div>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-md-5 mb-3">
          <img src="https://i.imgur.com/tTH5jve.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-md-5">
          <h3 class="font-weight-bold">Some Text Here</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            voluptas. Laborum quia aliquam voluptate placeat facilis. Aspernatur
            vero soluta voluptatibus.
          </p>
        </div>
      </div>
      <div
        class="row justify-content-around flex-md-row-reverse align-items-center"
      >
        <div class="col-md-5 mb-3">
          <img src="https://i.imgur.com/tOZ2nWw.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-md-5">
          <h3 class="font-weight-bold">Some Text Here</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            voluptas. Laborum quia aliquam voluptate placeat facilis. Aspernatur
            vero soluta voluptatibus.
          </p>
        </div>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-md-5 mb-3">
          <img src="https://i.imgur.com/JGNrSZQ.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-md-5">
          <h3 class="font-weight-bold">Some Text Here</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            voluptas. Laborum quia aliquam voluptate placeat facilis. Aspernatur
            vero soluta voluptatibus.
          </p>
        </div>
      </div>
    </div>
        )
    }
}

export default HomeGrid
