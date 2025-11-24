import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import mrdr from "../../assets/img/mrdr.png";
import relay1 from "../../assets/img/relay1.png";
import ir2 from "../../assets/img/ir2.png";
import rfm from "../../assets/img/rfm.jpg";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
    const navigate = useNavigate();
  
  const [motorIndex, setMotorIndex] = useState(null);
  const [relayIndex, setRelayIndex] = useState(null);
  const [irIndex, setIrIndex] = useState(null);
  const [rfIndex, setRfIndex] = useState(null);

  const toggle = (index, setter, current) => {
    setter(current === index ? null : index);
  };
  const ToggleIcon = ({ isOpen }) =>
    isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  return (
    <>
      <div className="main-product">
        <div className="head-product">
          <h1>Products</h1>
          <div className="circle1" />
        </div>
        <div className="flexbox">
          <div className="left">
            <div className="b1 product-box">
              <h1>240+</h1>
              <p>PARTNERS</p>
            </div>
            <div className="b2 product-box">
              <h1>92%</h1>
              <p>FATER TECHNOLOGY</p>
            </div>
          </div>
          <div className="mid">
            <img
              src="https://png.pngtree.com/png-clipart/20240925/original/pngtree-human-head-made-of-liquid-metal-png-image_16089761.png"
              alt="face"
            />
          </div>
          <div className="right">
            <p>
              Our product page is designed to showcase each item with clarity,
              visual appeal, and ease of interaction. Users can explore detailed
              information, high-resolution images, reviews, and pricing — all in
              one place.
            </p>
            <div className="mad-hero-cta">
              <button
                className="mean-button primary large"
                onClick={() => navigate("/contact-us")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="circle2" />
        </div>
      </div>
      <section className="features">
        <div className="container">
          {/* Motor Driver */}
          <div className="features-content">
            <div className="features-text">
              <h2 className="section-title">L293D MOTOR DRIVER MODULE</h2>
              <p className="section-description">
                Robotronix provide L293D Motor Driver Module is a medium power
                motor driver perfect for driving DC Motors and Stepper Motors.
                Robotronix uses the popular L293 motor driver IC. Sound in a
                robotics application, bidirectional D.C. motor controller, and
                stepper motor driver. Separate logic supply to reduce
                dissipation. L293D includes the output clamping diodes within
                the I.C. for protection.
              </p>
              <div className="accordion-product">
                <div className="accordion-item">
                  <button
                    aria-expanded={motorIndex === 0}
                    onClick={() => toggle(0, setMotorIndex, motorIndex)}
                  >
                    <span className="accordion-title">Specification</span>
                    <ToggleIcon isOpen={motorIndex === 0} />
                  </button>
                  <div
                    className={`accordion-content ${
                      motorIndex === 0 ? "open" : ""
                    }`}
                  >
                    <table className="spec-table">
                      <tbody>
                        <tr>
                          <td>Product type</td>
                          <td>l293d motor driver module</td>
                        </tr>
                        <tr>
                          <td>IC</td>
                          <td> L293D</td>
                        </tr>
                        <tr>
                          <td>Voltage Range</td>
                          <td> 5v -36v</td>
                        </tr>
                        <tr>
                          <td>Logic control input</td>
                          <td>7v dc max</td>
                        </tr>
                        <tr>
                          <td>Output drive current</td>
                          <td> 600 mA per channel</td>
                        </tr>
                        <tr>
                          <td>Interface lines</td>
                          <td>Inbuild or soldered berg connectors</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    aria-expanded={motorIndex === 1}
                    onClick={() => toggle(1, setMotorIndex, motorIndex)}
                  >
                    <span className="accordion-title">Features</span>
                    <ToggleIcon isOpen={motorIndex === 1} />
                  </button>
                  <div
                    className={`accordion-content ${
                      motorIndex === 1 ? "open" : ""
                    }`}
                  >
                    <ul className="feature-content">
                      <li>
                        Dual DC motor driver or bipolar stepper motor driver.
                      </li>
                      <li>High noise immunity.</li>
                      <li>Output current up to 600 mA per channel</li>
                      <li>Berg connector accessibility.</li>
                      <li>Header connector for motors.</li>
                      <li>PCB dimensions 42 mm x 35 mm.</li>
                      <li>Output clamping diodes included.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img className="features-img" src={mrdr} alt="Motor Driver" />
            </div>
          </div>

          {/* Relay Module */}
          <div className="features-content reverse">
            <div className="features-text">
              <h2 className="section-title">RELAY MODULE</h2>
              <p className="section-description">
                5 Volts 1-Channel relay module, 2-channel and 4-channel relay
                module are an interfacing boards that is compatible with
                Arduino, AVR, PIC, ARM, RPi boards etc. It controls larger loads
                and devices like DC motors, AC motors, and other AC- DC devices
                with the digital outputs from controllers and processors. It is
                frequently used in the automatic control circuit. To put it
                simply, it is a mechanical switch to controlling a high-current
                circuit with a low-current signal.
              </p>
              <div className="accordion-product">
                <div className="accordion-item">
                  <button
                    aria-expanded={relayIndex === 0}
                    onClick={() => toggle(0, setRelayIndex, relayIndex)}
                  >
                    <span className="accordion-title">Specification</span>
                    <ToggleIcon isOpen={relayIndex === 0} />
                  </button>
                  <div
                    className={`accordion-content ${
                      relayIndex === 0 ? "open" : ""
                    }`}
                  >
                    <table className="spec-table">
                      <tbody>
                        <tr>
                          <td>Product type</td>
                          <td>1-channel relay module</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td> 4.7 cm *3 cm</td>
                        </tr>
                        <tr>
                          <td>Module type</td>
                          <td> 2-channel relay module</td>
                        </tr>
                        <tr>
                          <td>Dimension</td>
                          <td>6.4 cm * 4.7 cm</td>
                        </tr>
                        <tr>
                          <td>Module type</td>
                          <td> 4-channel relay module</td>
                        </tr>
                        <tr>
                          <td>Dimension</td>
                          <td>8 cm *6.5 cm</td>
                        </tr>
                        <tr>
                          <td>Operating voltage</td>
                          <td> 5v DC</td>
                        </tr>
                        <tr>
                          <td>Max relay contact current</td>
                          <td> 10A</td>
                        </tr>
                        <tr>
                          <td>High load voltage</td>
                          <td>240V AC</td>
                        </tr>
                        <tr>
                          <td>Relay contacts</td>
                          <td>
                            1 normally open (NO) contact & 1 normally closed
                            (NC) contact
                          </td>
                        </tr>
                        <tr>
                          <td>Power led indicator</td>
                          <td>Input led relay is ON</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    aria-expanded={relayIndex === 1}
                    onClick={() => toggle(1, setRelayIndex, relayIndex)}
                  >
                    <span className="accordion-title">Features</span>
                    <ToggleIcon isOpen={relayIndex === 1} />
                  </button>
                  <div
                    className={`accordion-content ${
                      relayIndex === 1 ? "open" : ""
                    }`}
                  >
                    <ul className="feature-content">
                      <li>Handles up to 240V, 10A</li>
                      <li>Fast switching</li>
                      <li>Power LED indicator</li>
                      <li>Normally open & closed contacts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img className="features-img" src={relay1} alt="Relay Module" />
            </div>
          </div>

          {/* IR Sensor and RF Module omitted for brevity. Duplicate structure above. */}
          <div className="features-content">
            <div className="features-text">
              <h2 className="section-title">IR Sensor Module</h2>
              <p className="section-description">
                The IR Sensor (Infrared Obstacle detector) Module an I.R. sensor
                can measure the heat of an object as well as detect motion.
                These sensors measure just infrared radiation instead of
                emanating it, which is known as a passive I.R. sensor. The
                onboard comparator (LM358) circuitry does the processing and the
                green LED indicator lights up. The module out[puts a 3 pin
                interface with Vcc, GND, and an OUTPUT pin via male jumpers. The
                emitter is simply an IR LED (Light Emitting Diode). The detector
                is merely an I.R. photodiode sensitive to I.R. light of the same
                wavelength as that emitted by the IR LED. When infrared light
                strikes the photodiode, the output voltages vary in response.
              </p>
              <div className="accordion-product">
                <div className="accordion-item">
                  <button
                    aria-expanded={irIndex === 0}
                    onClick={() => toggle(0, setIrIndex, irIndex)}
                  >
                    <span className="accordion-title">Specification</span>
                    <ToggleIcon isOpen={irIndex === 0} />
                  </button>
                  <div
                    className={`accordion-content ${
                      relayIndex === 0 ? "open" : ""
                    }`}
                  >
                    <table className="spec-table">
                      <tbody>
                        <tr>
                          <td>Main Chip</td>
                          <td> LM358</td>
                        </tr>
                        <tr>
                          <td>Operating Voltage (VDC)</td>
                          <td> 3.3V - 5V</td>
                        </tr>
                        <tr>
                          <td>Average Current Consumption (mA)</td>
                          <td> 0.06</td>
                        </tr>
                        <tr>
                          <td>Detection Angle</td>
                          <td> 35 deg</td>
                        </tr>
                        <tr>
                          <td>Distance Measuring Range (cm)</td>
                          <td> 2.15 - 30</td>
                        </tr>
                        <tr>
                          <td>Dimensions (mm) L*W</td>
                          <td>44 x 22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    aria-expanded={irIndex === 1}
                    onClick={() => toggle(1, setIrIndex, irIndex)}
                  >
                    <span className="accordion-title">Features</span>
                    <ToggleIcon isOpen={irIndex === 1} />
                  </button>
                  <div
                    className={`accordion-content ${
                      relayIndex === 1 ? "open" : ""
                    }`}
                  >
                    <ul className="feature-content">
                      <li className="p-0">Easy to use.</li>
                      <li className="p-0">Onboard detection led indicator.</li>
                      <li>The effective distance range of 2cm to 80cm.</li>
                      <li>
                        The detection distance can be adjusted with
                        potentiometer.
                      </li>
                      <li>The comparator using LM358, stable.</li>
                      <li>We can use a 3-5 Volt D.C. power supply module.</li>
                      <li>The red power LED is lit when power is ON.</li>
                      <li>
                        Each module has a threshold comparator voltage
                        adjustable via potentiometer.
                      </li>
                      <li>
                        If there is an obstacle, the led turns on the circuit
                        board.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img className="features-img" src={ir2} alt="Relay Module" />
            </div>
          </div>

          {/*RF Module*/}
          <div className="features-content reverse">
            <div className="features-text">
              <h2 className="section-title">RF Module</h2>
              <p className="section-description">
                This is a unique R.F.-based 4 channel transmitter and receiver
                remote control with 256 channels to choose and includes a dual
                dc motor driver: high-performance remote-control module using
                433MHz R.F. modules. It can easily fit into a breadboard and
                work well with microcontrollers to create a very simple wireless
                receiving frequency. TX-ASK is designed by the saw resonator,
                with an effective low cost, small size and simple to use for
                designing.
              </p>
              <div className="accordion-product">
                <div className="accordion-item">
                  <button
                    aria-expanded={rfIndex === 0}
                    onClick={() => toggle(0, setRfIndex, rfIndex)}
                  >
                    <span className="accordion-title">Specification</span>
                    <ToggleIcon isOpen={rfIndex === 0} />
                  </button>
                  <div
                    className={`accordion-content ${
                      rfIndex === 0 ? "open" : ""
                    }`}
                  >
                    <table className="spec-table">
                      <tbody>
                        <tr>
                          <td>Operating Voltage (vdc) Transmitter</td>
                          <td>5V - 12V </td>
                        </tr>
                        <tr>
                          <td>Operating voltage (vdc) Receiver</td>
                          <td> 5V - 12V</td>
                        </tr>
                        <tr>
                          <td>Frequency Range</td>
                          <td> 433 MHz</td>
                        </tr>
                        <tr>
                          <td>Communication Distance</td>
                          <td> 60m</td>
                        </tr>
                        <tr>
                          <td>Channel Output</td>
                          <td> 4 Channel</td>
                        </tr>
                        <tr>
                          <td>Dual Motor Driver</td>
                          <td>2A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    aria-expanded={rfIndex === 1}
                    onClick={() => toggle(1, setRfIndex, rfIndex)}
                  >
                    <span className="accordion-title">Features</span>
                    <ToggleIcon isOpen={rfIndex === 1} />
                  </button>
                  <div
                    className={`accordion-content ${
                      rfIndex === 1 ? "open" : ""
                    }`}
                  >
                    <ul className="feature-content">
                      <li>Easy to use.</li>
                      <li>
                        4 channel remote control with 256 channels to choose
                        from.
                      </li>
                      <li>On-Board Regulator with filters.</li>
                      <li>Small size.</li>
                      <li>On-Board Regulator with filters.</li>
                      <li>
                        High performance with no interference of the same remote
                        with different frequency.
                      </li>
                      <li>
                        Available in two different frequencies, 433MHz or
                        315MHz.
                      </li>
                      <li>More giant switches for better control.</li>
                      <li>2Amp dual motor driver onboard.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <img className="features-img" src={rfm} alt="Relay Module" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
