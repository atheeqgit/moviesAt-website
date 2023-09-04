import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../contextPage";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import "./selected.css";
const Selected = () => {
  const params = useParams();
  const id = params.id;

  const { fetchDetail } = useContext(Context);

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(fetchDetail(id));
    console.log(fetchDetail(id));
  }, []);

  return (
    <div className="x-margin x-padding">
      <div className="banner-content">
        <h1>{detail.name ? detail.name : detail.title}</h1>
        <p className="description">{detail.overview}</p>
        <div className="banner-infos">
          <div className="pg-box box">{detail.adult ? "pg-18" : "pg-12"}</div>
          <div className="hd-box box">{detail.media_type}</div>
          <p>comedy , fantasy</p>
          <div className="date-time">
            <MdOutlineDateRange />{" "}
            {detail.first_air_date
              ? detail.first_air_date
              : detail.release_date}
          </div>
          <div className="date-time">
            <MdOutlineDateRange /> 115min
          </div>
        </div>
        <div className="banner-btns">
          <div className="banner-btn">
            <BsPlayCircle />
            save to list
          </div>
          <div className="banner-btn">
            <BsPlayCircle />
            Watch now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selected;
