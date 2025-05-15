import React from 'react';
import { GiHouse } from 'react-icons/gi';

const DeliveryAreas = () => {
  return (
    <div className="bg-blue-100 text-black py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Delivery Areas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Bangalore</h3>
            </div>
            <p className="leading-relaxed">
              Hebbal | Kammanagada | Peenya | Malleswaram | Jayanagar | ...
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Chennai</h3>
            </div>
            <p className="leading-relaxed">
              Kilpauk | Royapettah | Mambalam | T Nagar | Mylapore | ...
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Delhi</h3>
            </div>
            <p className="leading-relaxed">
              Karol Bagh | Dilshad Garden | Mayur Vihar | Model Town | ...
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Ghaziabad</h3>
            </div>
            <p className="leading-relaxed">
              Indirapuram | Vaishali | Gaur City | Rajnagar Extension | ...
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Hyderabad</h3>
            </div>
            <p className="leading-relaxed">
            Madhapur | Gachibowli | Banjara Hills | Hitech City | Jubilee Hills | ...
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Kerala </h3>
            </div>
            <p className="leading-relaxed">
            Kochi | Thiruvananthapuram  | Kozhikode | Thrissur | Alappuzha  | ...
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Pune</h3>
            </div>
            <p className="leading-relaxed">
            Hinjewadi | Kothrud  | Baner | Wakad  | Viman Nagar | ...
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Mumbai</h3>
            </div>
            <p className="leading-relaxed">
            Andheri | Bandra  | Colaba | Dadar  | Powai  | ...
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Vijayawada</h3>
            </div>
            <p className="leading-relaxed">
            Benz Circle | MG Road | Poranki | Auto Nagar | Eluru Road | ...
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Gurgaon</h3>
            </div>
            <p className="leading-relaxed">
            Cyber City | MG Road  | Sohna Road | Golf Course Road | Sushant Lok | ...
            </p>
          </div>
 <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Guntur</h3>
            </div>
            <p className="leading-relaxed">
            Brodipet | Arundelpet | Lakshmipuram  | Pattabhipuram   | Mangalagiri | ...
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <GiHouse className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">Noida</h3>
            </div>
            <p className="leading-relaxed">
            Sector 18 | Sector 62 | Sector 50  | Sector 15   | Sector 137 | ...
            </p>
          </div>
          
       
        </div>
      </div>
    </div>
  );
};

export default DeliveryAreas;
