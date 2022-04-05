import React from 'react';
import styled from 'styled-components';
import { Button, Paper } from "@material-ui/core";

import modelImg from "./imgs/test-model.jpg";
import model2Img from "./imgs/test-model2.jpg";
import model3Img from "./imgs/uniqlo-model.png";
import model4Img from "./imgs/uniqlo-model2.jpg";

import clothBlueImg from "./imgs/test-blue.png";
import clothRedImg from "./imgs/test-red.png";
import clothGreenImg from "./imgs/test-green.png";
import clothPurpleImg from "./imgs/uniqlo-purple.png";
import clothGrayImg from "./imgs/uniqlo-short-gray.png";

import wo1 from "./imgs/woman/wo1.jpg";
import wo2 from "./imgs/woman/wo2.jpg";
import wo3 from "./imgs/woman/wo3.jpg";
import wo4 from "./imgs/woman/wo4.jpg";
import wo5 from "./imgs/woman/wo5.jpg";

import sh1 from "./imgs/men/sh1.jpg";
import sh2 from "./imgs/men/sh2.jpg";
import sh3 from "./imgs/men/sh3.jpg";
import sh4 from "./imgs/men/sh4.jpg";
import sh5 from "./imgs/men/sh5.jpg";
import sh6 from "./imgs/men/sh6.jpg";

import ja1 from "./imgs/jackets/ja1.jpg";
import ja2 from "./imgs/jackets/ja2.jpg";
import ja3 from "./imgs/jackets/ja3.jpg";
import ja4 from "./imgs/jackets/ja4.jpg";
import ja5 from "./imgs/jackets/ja5.jpg";


const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > .MuiPaper-root {
    padding: 1rem;
    flex: 1 1 0px;
    min-width: 300px;
    max-width: 600px;
    margin: 1rem;
  }

  .block {
    position: relative;
    min-height: 300px;
    .loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      transition: background 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .examples {
    overflow-x: auto;
    display: flex;
    align-items: center;
    > * {
      margin: 1rem;
    }
  }
  .example {
    display: inline-block;
    position: relative;
    img {
      width: 192px;
      height: 256px;
      object-fit: contain;
    }
    button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }
`;




const VT = () => {
    return (
        <Wrapper>
          <Paper elevation={3}>
          <h2>Model Pre-Processing</h2>

          <h4>Upload your image or click one of the examples below</h4>
          <div className="examples">
            {/* model input */}
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="modelInput"
              type="file"
            />
            <label htmlFor="modelInput">
              <Button
                variant="contained"
                color="primary"
                component="span"
              >
                Upload Image of Model
              </Button>
            </label>
          </div>

          <div className="examples">
            {[modelImg, model2Img, model3Img, model4Img].map((imgUrl) => (
              <div className="example" key={imgUrl}>
                <img src={imgUrl} alt="example model" />
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Choose
                </Button>
              </div>
            ))}
          </div>
          </Paper>

          <Paper elevation={3}>
          <h2>Clothes Pre-Processing</h2>
          <p>
            You need to first remove the background of the clothes image
            somewhere else.
          </p>
          <p>
            For example try something like:{" "}
            <a
              href="https://remove.bg"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://remove.bg/
            </a>
            .
          </p>
          <p>Then upload the PNG here</p>

          <h4>Upload your image or click one of the examples below</h4>
          <div className="examples">
            {/* clothes input */}
            <input
              accept="image/png"
              style={{ display: "none" }}
              id="clothesInput"
              type="file"
            />
            <label htmlFor="clothesInput">
              <Button variant="contained" color="primary" component="span">
                Upload Image of Clothes
              </Button>
            </label>
          </div>

          <div className="examples">
            {[
              clothRedImg,
              clothBlueImg,
              clothGreenImg,
              clothGrayImg,
              clothPurpleImg,
              wo1,
              wo2,
              wo3,
              wo4,
              wo5,
              sh1,
              sh2,
              sh3,
              sh4,
              sh5,
              sh6,
              ja1,
              ja2,
              ja3,
              ja4,
              ja5
            ].map((imgUrl) => (
              <div className="example" key={imgUrl}>
                <img src={imgUrl} alt="example clothes" />
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Choose
                </Button>
              </div>
            ))}
          </div>
          </Paper>
          <Paper elevation={3}> 
          <h2>Final Try-On</h2>
          <p>
            Finish the model pre-processing and clothes pre-processing parts,
            then you can click this button to try-on!
          </p>
          <Button
            variant="contained"
            color="primary"
            component="span"
          >
            Try-On!
          </Button>

          <div className="block">
            <h3>cp-vton try-on result:</h3>
          </div>
          </Paper>
        </Wrapper>
    )
}

export default VT;