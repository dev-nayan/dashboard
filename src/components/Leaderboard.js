import React from "react";
import MockData from "../Utills/MOCK_DATA";
import {
  Crown,
  IndianRupee,
  LineChart,
  TrendingUp,
  WholeWord,
} from "lucide-react";

const headers = [
  { title: "id" },
  { title: "Name", icon: WholeWord },
  { title: "Calmar Ratio", icon: TrendingUp, color: "text-green-500" },
  { title: "Overall Profit", icon: TrendingUp, color: "text-green-500" },
  { title: "Avg Daily Profit", icon: LineChart, color: "text-green-500" },
  { title: "Win %", icon: Crown, color: "text-green-500" },
  { title: "Price", icon: IndianRupee },
  { title: "Action" },
];

const imgName = ['Terry', 'Sheldon', 'Terrill', 'Miles', 'Mavis', 'Alison', 'Oleta', 'Ewell', 'Demetrius', 'Eleanora', 'Marcel', 'Assunta', 'Trace', 'Enoch', 'Jeanne', 'Trycia', 'Bradford', 'Arely', 'Gust', 'Lenna', 'Doyle', 'Tressa', 'Felicity', 'Jocelyn', 'Edwina', 'Griffin', 'Piper', 'Kody', 'Macy', 'Maurine']

function LeaderBoard() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="m-10 flex flex-col items-center justify-center border-[2px] rounded-lg shadow-md gap-2">
        <div className="w-full flex px-8 py-4 justify-between items-end">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold text-gray-700">Basic Backtest</p>
            <p className="text-xl text-gray-500">Your mock data is available here</p>
          </div>
          <div className="flex items-center border-2 h-10 rounded-lg overflow-hidden">
            <p className="border-r-2 bg-gray-400 px-4 h-full flex items-center">Slippage</p>
            <select defaultValue={0} className="px-4 outline-none h-full">
              <option value={0}>0%</option>
              <option value={0.5}>0.5%</option>
              <option value={1}>1%</option>
            </select>
          </div>
        </div>
        <div className="h-[75vh] w-[95%] overflow-auto relative px-2">
          <div className="flex justify-between bg-gray-500 px-4 py-2 rounded-lg gap-2 sticky top-0 left-0">
            {headers.map((header, index) => {
              const Icon = header.icon || null;
              return (
                <div
                  key={index}
                  className={`${index === 0 ? "w-8" : "flex-1"
                    } flex gap-1 items-center ${index > 1 ? "justify-center" : ""
                    } text-white capitalize`}
                >
                  {Icon && <Icon size={14} />}
                  <p>{header.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between py-2">
            {MockData.map((data, index) => {
              // if (index > 20) return null;
              return (
                <div
                  key={index}
                  className={`flex justify-between px-4 py-2 gap-2 ${index % 2 === 0 ? "" : "bg-gray-200 rounded-lg"
                    }`}
                >
                  {headers.map((header, ind) => {
                    const Icon = header.icon || null;
                    if (header.title === "Action")
                      return (
                        <p className={`flex-1 text-center  ${data[header.title] ? "text-green-500" : "text-blue-400"}`}>
                          {data[header.title] ? "Buy" : "View"}
                        </p>
                      );
                    return (
                      <p
                        key={ind}
                        className={`${ind === 0 ? "w-8" : "flex-1 "} ${ind > 1 ? "text-center justify-center" : ""
                          } flex items-center gap-2`}
                      >
                        {ind === 1 && <div className="h-8 w-8 bg-gray-600 rounded-full overflow-hidden">
                          <img src={"https://robohash.org/" + imgName[parseInt(index % 7)] + ".png?set=set" + parseInt(index % 7)} alt="avatar" />
                        </div>
                        }
                        {Icon && ind > 1 && <Icon size={16} className={header.color} />}
                        {data[header.title]}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
