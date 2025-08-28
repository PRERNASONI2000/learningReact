import React from "react";

const Home = ({backendMessage}) => {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-base-300 w-full">
      <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
      <input type="checkbox" class="checkbox checkbox-secondary" />
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title {backendMessage }</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;