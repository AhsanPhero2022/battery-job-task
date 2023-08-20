import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function App() {
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const categoriesX = [585281.709, 585282.224, 585282.7391
  ,
585285.3143,
585285.8293,
585286.3443,
585286.8594,
585287.3744,
585287.8895,
585288.4045,
585288.9195,
585289.4346,
585289.9496,
585290.4647,
585290.9797,
585291.4947,
585292.0098,
585292.5248,
585293.0399,
585293.5549,
585294.0699,
585294.585,
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const sectors = selectedCategories;

    const userData = { userName, userEmail, sectors };
    // server side code
    fetch("https://y-ahsanphero2022.vercel.app/user", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "WOW!",
          text: "Submitted Information is Successful",
          width: 400,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WPcaXWzQ3NQy0ioCyF70fnONKdpQdkSYZg&usqp=CAU")
    left top
    no-repeat
  `,
        });
      });

    if (!termsChecked) {
      alert("Please accept the terms and conditions.");
      return;
    }
  };
  return (
    <div
      className=" p-4 file:bg-cover bg-center min-h-screen  bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://www.wallpaperflare.com/static/872/34/380/circles-background-light-patterns-wallpaper.jpg")',
      }}
    >
      <div className="lg:w-1/2 mx-auto my-20">
        <div className="text-center">
          <Link to="/details">
            <button className="text-white btn btn-info normal-case">
              See All Data
            </button>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="text-white space-y-4">
          <div>
            <label className="block mb-2 font-medium">Project Name:</label>
            <input
              type="text"
              name="name"
              required
              className="text-black w-full p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Project Description
            </label>
            <input
              required
              type="text"
              name="description"
              className="text-black w-full p-2 border rounded-md"
              placeholder="Project Description"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Client</label>
            <input
              required
              type="text"
              name="Client"
              className="text-black w-full p-2 border rounded-md"
              placeholder="Enter your Client Id"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Contractor</label>
            <input
              required
              type="text"
              name="contractor"
              className="text-black w-full p-2 border rounded-md"
              placeholder="Enter your Contractor Id"
            />
          </div>
          {/* number X */}
          <div>
            <label className="block mb-2 font-medium ">Number: X</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCategories(!showCategories)}
                className="w-full p-2 border rounded-md text-left"
              >
                Selected Numbers ({selectedCategories.length})
              </button>
              {showCategories && (
                <div className="absolute mt-1 bg-green-300  text-blue-600 border border-gray-300 shadow-md rounded-md">
                  {categoriesX.map((category) => (
                    <label key={category} className="block px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 form-checkbox"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
         
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                required
                onChange={() => setTermsChecked(!termsChecked)}
                className="form-checkbox"
              />
              <span className="ml-2">I accept the terms and conditions</span>
            </label>
          </div>
          <button type="submit" className="btn bg-cyan-500 hover:bg-cyan-200 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
