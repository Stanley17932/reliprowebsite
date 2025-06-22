const Services = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-green-600 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Predictive Maintenance</h3>
          <p className="mt-4">
            Harness AI-powered insights to predict and prevent machine failures
            before they happen, ensuring maximum uptime.
          </p>
        </div>
        <div className="bg-green-600 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
          <p className="mt-4">
            Monitor equipment health continuously through IoT sensors and stay
            ahead of potential failures with real-time alerts.
          </p>
        </div>
        <div className="bg-green-600 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">
            Automated Technician Dispatch
          </h3>
          <p className="mt-4">
            Automatically dispatch the right technician to the right task,
            reducing downtime and increasing team efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
