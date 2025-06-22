const Testimonials = () => {
  return (
    <div className="bg-white text-black py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="flex justify-center space-x-6">
        <div className="max-w-xs text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <p className="italic">
            ReliPro transformed our maintenance processes. Downtime has been
            reduced, and our technicians are more efficient!
          </p>
          <h4 className="font-semibold mt-4">Mr. John Okumu</h4>
          <p className="text-green-800">Maintenance Manager, Nile Breweries</p>
        </div>
        <div className="max-w-xs text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <p className="italic">
            The predictive analytics feature has been a game-changer. We are now
            able to prevent breakdowns before they occur.
          </p>
          <h4 className="font-semibold mt-4">Ms. Mary Mungai</h4>
          <p className="text-green-800">Operations Head, Safaricom</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
