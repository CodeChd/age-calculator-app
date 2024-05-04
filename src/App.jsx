function App() {
  return (
    <main className="grid min-h-screen place-content-center w-full h-full">


      <div className="p-12 relative bg-neutral-white rounded-2xl rounded-br-[6rem] h-full w-[40rem]">
        <div>
          <div className="relative max-w-xl border-neutral-smokeGrey ">
            <ul
              aria-label="date-setter"
              className="uppercase font-poppins font-medium flex gap-5 "
            >
              <li className="flex flex-col">
                <label htmlFor="day">Day</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded mt-1 border-neutral-offBlack outline-none p-2 font-bold text-2xl"
                  placeholder="DD"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="month">Month</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded my-1  border-neutral-offBlack outline-none p-2 font-bold text-2xl"
                  placeholder="MM"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded mt-1  border-neutral-offBlack outline-none p-2 font-bold text-2xl"
                  placeholder="YYYY"
                />
              </li>
            </ul>

            <div className="relative">
              <button className="float-right">
                <img
                  src="/assets/images/icon-arrow.svg"
                  className="bg-primary-purple p-4 rounded-full  "
                  alt=""
                />
              </button>
              <hr className=" absolute -bottom-10  border-neutral-smokeGrey w-[90%]   "/>
            </div>


          </div>

        </div>

        <div></div>
      </div>
    </main>
  );
}

export default App;
