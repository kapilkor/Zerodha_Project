import React from 'react';

const Hero = () => {
  const handleTicketClick = () => {
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <section className="container-fluid " id="supportHero">
      <div className="py-4 mx-5">

        {/* TOP ROW */}
        <div className="d-flex justify-content-between align-items-center px-4  py-4 ">
          <h1 className="mb-0 text-muted">Support Portal</h1>

          <button
            className="btn btn-primary py-2 px-5"
            type="button"
            onClick={handleTicketClick}
          >
            My Ticket
          </button>
        </div>

        {/* SEARCH FIELD — SAME WIDTH AS ABOVE */}
        <div className="px-5 mt-4 mb-4">
          <input
            type="text"
            className="form-control py-3 "
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
