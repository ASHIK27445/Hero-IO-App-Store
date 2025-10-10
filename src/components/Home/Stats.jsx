const Stat = () => {
  return (
    <div className="stats shadow font-inter text-white flex flex-col md:flex-row justify-center max-w-[1140px] mx-auto">
      <div className="stat place-items-center px-12">
        <div className="stat-title text-sm text-white">Total Downloads</div>
        <div className="stat-value font-bold lg:font-extrabold text-[40px] lg:text-[50px] my-3">29.6M</div>
        <div className="stat-desc text-sm text-white">21% more than last month</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-sm text-white">Total Reviews</div>
        <div className="stat-value font-bold lg:font-extrabold text-[40px] lg:text-[50px] my-1 md:my-3">906K</div>
        <div className="stat-desc text-sm text-white">46% more than last month</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-sm text-white">Active Apps</div>
        <div className="stat-value font-bold lg:font-extrabold text-[40px] lg:text-[50px] my-3">132+</div>
        <div className="stat-desc text-sm text-white">31 more will Launch</div>
      </div>
    </div>
  );
};
export default Stat;
