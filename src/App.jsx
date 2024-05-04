function App() {
  return (
    <main className="grid min-h-screen place-content-center w-full h-full">


      <div className="p-12 relative bg-neutral-white rounded-3xl rounded-br-[8rem] h-full w-[40rem]">
        <div className="pb-20">
          <div className="relative max-w-xl border-neutral-smokeGrey ">
            <ul
              aria-label="date-setter"
              className="uppercase font-poppins font-bold flex gap-5 text-neutral-smokeGrey "
            >
              <li className="flex flex-col">
                <label htmlFor="day">Day</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded mt-1 border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                  placeholder="DD"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="month">Month</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded my-1  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                  placeholder="MM"
                />
              </li>
              <li className="flex flex-col">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  className="w-32 h-14 border-solid border-[1px] rounded mt-1  border-neutral-smokeGrey outline-none p-2 font-bold text-2xl focus:ring-primary-purple/40 focus:ring-[1px]"
                  placeholder="YYYY"
                />
              </li>
            </ul>

            <div className="relative group">
              <button className="float-right">
                <img
                  src="/assets/images/icon-arrow.svg"
                  className="group-hover:bg-neutral-offBlack bg-primary-purple p-4 rounded-full transition-colors "
                  alt=""
                />
              </button>
              <hr className=" absolute -bottom-10  border-neutral-smokeGrey w-[86%]   "/>
            </div>


          </div>

        </div>

        <div className="text-7xl font-poppins font-bold">
          <p><span className="text-primary-purple text-[5rem] inline-block">--</span>years</p> 
          <p><span className="text-primary-purple text-[5rem] inline-block">--</span>months</p>
          <p><span className="text-primary-purple text-[5rem] inline-block">--</span>days</p>
        </div>
      </div>
    </main>
  );
}

export default App;
