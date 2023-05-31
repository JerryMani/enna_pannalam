import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./horo.css"
import mokka from '../../assets/ebc150661086279e2f08a94a4d02915d.jpg';
import Text from "../horo/Text";
function HoroscopeBoxes() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "o", label: "Op" },
    { value: "opt", label: "Op" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const handleChange = (selected, name) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      const index = newSelectedOptions.findIndex(
        (option) => option.name === name
      );
      if (index === -1) {
        newSelectedOptions.push({ name, selected });
      } else {
        newSelectedOptions[index].selected = selected;
      }
      return newSelectedOptions;
    });
  };

  const getSelectedOptions = (name) => {
    const index = selectedOptions.findIndex((option) => option.name === name);
    return index !== -1 ? selectedOptions[index].selected : null;
  };

  return (
    <div className="back">
    <Text/>
    <div className="horoscope-main-container">
          <div className="horo-img">
      <div className="horoscope-container">
        <div className="horoscope-box">
          <Select
            name="1"
            options={options}
            isMulti
            value={getSelectedOptions("1")}
            onChange={(selected) => handleChange(selected, "1")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="2"
            options={options}
            isMulti
            value={getSelectedOptions("2")}
            onChange={(selected) => handleChange(selected, "2")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="3"
            options={options}
            isMulti
            value={getSelectedOptions("3")}
            onChange={(selected) => handleChange(selected, "3")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="4"
            options={options}
            isMulti
            value={getSelectedOptions("4")}
            onChange={(selected) => handleChange(selected, "4")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="5"
            options={options}
            isMulti
            value={getSelectedOptions("5")}
            onChange={(selected) => handleChange(selected, "5")}
          />
        </div>
        <div className="horoscope-box"></div>

        <div className="horoscope-box"></div>
        <div className="horoscope-box">
          <Select
            name="6"
            options={options}
            isMulti
            value={getSelectedOptions("6")}
            onChange={(selected) => handleChange(selected, "6")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="7"
            options={options}
            isMulti
            value={getSelectedOptions("7")}
            onChange={(selected) => handleChange(selected, "7")}
          />
        </div>
        <div className="horoscope-box"></div>
        <div className="horoscope-box"></div>
        <div className="horoscope-box">
          <Select
            name="8"
            options={options}
            isMulti
            value={getSelectedOptions("8")}
            onChange={(selected) => handleChange(selected, "8")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="9"
            options={options}
            isMulti
            value={getSelectedOptions("9")}
            onChange={(selected) => handleChange(selected, "9")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="10"
            options={options}
            isMulti
            value={getSelectedOptions("10")}
            onChange={(selected) => handleChange(selected, "10")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="11"
            options={options}
            isMulti
            value={getSelectedOptions("11")}
            onChange={(selected) => handleChange(selected, "11")}
          />
        </div>
        <div className="horoscope-box">
          <Select
            name="12"
            options={options}
            isMulti
            value={getSelectedOptions("12")}
            onChange={(selected) => handleChange(selected, "12")}
          />
        </div>
        </div>
        <img className="gopi"  src={mokka} alt="img"/>
        </div>
        <div className="horo-img">
        <div className="horoscope-container">
          <div className="horoscope-box">
            <Select
              name="13"
              options={options}
              isMulti
              value={getSelectedOptions("13")}
              onChange={(selected) => handleChange(selected, "13")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="14"
              options={options}
              isMulti
              value={getSelectedOptions("14")}
              onChange={(selected) => handleChange(selected, "14")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="14"
              options={options}
              isMulti
              value={getSelectedOptions("14")}
              onChange={(selected) => handleChange(selected, "14")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="15"
              options={options}
              isMulti
              value={getSelectedOptions("15")}
              onChange={(selected) => handleChange(selected, "15")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="16"
              options={options}
              isMulti
              value={getSelectedOptions("16")}
              onChange={(selected) => handleChange(selected, "16")}
            />
          </div>
          <div className="horoscope-box"></div>
          <div className="horoscope-box"></div>
          <div className="horoscope-box">
            <Select
              name="17"
              options={options}
              isMulti
              value={getSelectedOptions("17")}
              onChange={(selected) => handleChange(selected, "17")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="18"
              options={options}
              isMulti
              value={getSelectedOptions("18")}
              onChange={(selected) => handleChange(selected, "18")}
            />
          </div>
          <div className="horoscope-box"></div>
          <div className="horoscope-box"></div>
          <div className="horoscope-box">
            <Select
              name="19"
              options={options}
              isMulti
              value={getSelectedOptions("19")}
              onChange={(selected) => handleChange(selected, "19")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="20"
              options={options}
              isMulti
              value={getSelectedOptions("20")}
              onChange={(selected) => handleChange(selected, "20")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="21"
              options={options}
              isMulti
              value={getSelectedOptions("21")}
              onChange={(selected) => handleChange(selected, "21")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="22"
              options={options}
              isMulti
              value={getSelectedOptions("22")}
              onChange={(selected) => handleChange(selected, "22")}
            />
          </div>
          <div className="horoscope-box">
            <Select
              name="23"
              options={options}
              isMulti
              value={getSelectedOptions("23")}
              onChange={(selected) => handleChange(selected, "23")}
            />
          </div>
          
              </div>
        <img className="gopi" src={mokka} alt="img"/>
       
        </div>
    
    </div>
    <div className="ga ">
      <button className="btn-primary mb-4" type="submit">
                <Link className="ag" to="/home">Save Profile</Link>
                    <i class="uil uil-navigator"></i>
                </button>
      </div>
    </div>

  );
}

export default HoroscopeBoxes;

