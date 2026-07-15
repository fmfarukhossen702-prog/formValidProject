import React from "react";
import Container from "./Container";
import image from "../assets/hero.png";
import Form from "./Form";
import Antigravity from "./AntigravityInner ";

const Content = () => {
  return (
    <div>
      <Container>
        <div className="py-5 h-150">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className=" lg:col-span-1 md:h-full h-115 w-full ">
              <div
                style={{ width: "100%", height: "300px", position: "relative" }}
              >
                <Antigravity
                  count={300}
                  magnetRadius={6}
                  ringRadius={7}
                  waveSpeed={0.4}
                  waveAmplitude={1}
                  particleSize={1.5}
                  lerpSpeed={0.05}
                  color="#5227FF"
                  autoAnimate
                  particleVariance={1}
                  rotationSpeed={0}
                  depthFactor={1}
                  pulseSpeed={3}
                  particleShape="capsule"
                  fieldStrength={10}
                />
                <div className=" absolute w-full top-0 left-0 ">
                  <div className="flex flex-col justify-center items-center ">
                    <div className="  flex justify-center items-center  py-10">
                      <img className="" src={image} alt="" />
                    </div>
                    <p className=" mt-3 font-semibold text-2xl text-white text-center ">
                      Flowbite
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* from  */}
            <div className="lg:col-span-1 text-white ">
              <Form />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;
