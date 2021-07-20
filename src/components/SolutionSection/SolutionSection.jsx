import React from "react";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { faRocket, faLaptopCode, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const serviceData = [
  {
    title: "Code Security",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    image: faRocket,
  },
  {
    title: "Team Management",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    image: faLaptopCode,
  },
  {
    title: "Access Controlled",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    image: faCreditCard,
  },
];

export const SolutionSection = () => {
  return (
    <div className="d-flex flex-column p-5 align-items-center">
      <div className="col-md-5 d-flex flex-column align-items-center">
        <div className="mb-3 section-title">Our Solution</div>
        <h2 className="head-title text-center">We Different From Others</h2>
        <h2 className="head-title">Should Choose Us</h2>
        <p className="pt-3 ps-3 title-secondary title-bold text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          blanditiis eaque impedit explicabo sunt at mollitia tempora amet.
        </p>
      </div>
      <div className="col-md-12">
        <div className="row row-cols-md-3 row-cols-sm-1 g-3 mt-5 p-3">
          {serviceData.map((data) => (
            <ServiceCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
