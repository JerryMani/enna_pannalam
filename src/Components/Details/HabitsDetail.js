import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../api_config";

import { useContext, useState } from "react";
import UserContext from "../Authcontext";
import "./Col.css";

function HabitDetails() {
  const {user, setUser} = useContext(UserContext)
  const [home, setHome] = useState("");
  const[land,setLand] = useState("");
  const [plat, setPlat] = useState("");
  const [food, setFood] = useState("");
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API_BASE_URL}/api/HabitDetails`,{

      user,home,land,plat,food,smoking,drinking,
      },
      {withCredentials: true}
    )
    if(response.data.auth){
      setUser((prevState) => ({
        ...prevState,
        habitDetails: response.data.habitDetails,
      }));
    navigate("/partnerpreferencedetails");
    setHome("");
    setLand("");
    setPlat("");
    setFood("");
    setSmoking("");
    setDrinking("");
    }
  };
  return (
    <div className="abc">
      <div className="page-wrapper bg-red p-t-180 p-b-100">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-body">
              <h2 className="title">Habit & Other Details</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="input-group1">
                  <select
                    value={home}
                    id="home-details"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setHome(e.target.value)}
                   >
                    <option readOnly>
                      Home Details
                    </option>
                    <option value="3">Own House</option>

                    <option value="4">Rented House</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={land}
                    id="land"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setLand(e.target.value)}
                >
                    <option readOnly>
                      Agriculture Land
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={plat}
                    id="plat"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setPlat(e.target.value)}
                  >
                    <option readOnly>
                      plat
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                     value={food}
                    id="food"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setFood(e.target.value)}
                   >
                    <option readOnly>
                      Food Habits
                    </option>
                    <option value="3">Vegetarian</option>

                    <option value="4">non-Vegetarian</option>

                    <option value="5">Eggetarian</option>
                    <option value="5">All</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                    value={smoking}
                    id="smoking"
                    className="input--style-2  browser-default  "
                    onChange={(e)=> setSmoking(e.target.value)}
                    >
                    <option readOnly>
                      smoking Habits
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>

                    <option value="5">Occasionally</option>
                  </select>
                </div>

                <div className="input-group1">
                  <select
                     value={drinking}
                    id="drinking"
                    className="input--style-2  browser-default "
                    onChange={(e)=> setDrinking(e.target.value)}
                     >
                    <option readOnly>
                      Drinking Habits
                    </option>
                    <option value="3">No</option>

                    <option value="4">Yes</option>

                    <option value="5">Occasionally</option>
                  </select>
                </div>

                <div className="p-t-30">
                  <div className="button mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary text-center"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitDetails;
