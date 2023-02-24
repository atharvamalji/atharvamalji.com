const Reviews = () => {
  return (
    <section className="flex justify-center p-4 py-24">
      <div className="w-[93rem] max-w-[93rem]">
        <div className="space-y-8">
          <div>
            <p className="text-5xl md:text-6xl font-[700]">
              <span>What clients say about me </span>
            </p>
          </div>
          <div className="grid mgrid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
            <div className="flex flex-col justify-between space-y-8 p-8 bg-amber-50 bg-hero-pattern bg-blend-multiply bg-cover">
              <p className="md:text-lg italic text-center">
                &quot;Atharva came to the rescue when I had a situation with a
                website that needed configuring to work correctly, especially in
                responsive design for mobile. He is thorough, attentive to the
                details, understand the brief well and can complete the task as
                required. A great contributor to the developing community.&quot;
              </p>
              <p className="text-lg md:text-xl text-center font-[700]">Azzam S.</p>
            </div>
            <div className="flex flex-col justify-between space-y-8 p-8 bg-amber-50 bg-hero-pattern bg-blend-multiply bg-cover">
              <p className="md:text-lg italic text-center">
                &quot;Excellent work! He fixed my project very quickly and make
                it much better! I will be definitely be coming back for more
                other tasks. Very fast. He offered great design suggestions.
                Thanks again! I really recommend him&quot;
              </p>
              <p className="text-lg md:text-xl text-center font-[700]">Nawfel C.</p>
            </div>
            <div className="flex flex-col justify-between space-y-8 p-8 bg-amber-50 bg-hero-pattern bg-blend-multiply bg-cover">
              <p className="md:text-lg italic text-center">
                &quot;Atharva is fantastic is a person who stays there until
                you are satisfied and is ready to make the design you imagined
                and make it real, this is what happened to me, well what can I
                say, I will go back to Atharva to hire him to new, as soon as I
                need it, thank you for everything Atharva!&quot;
              </p>
              <p className="text-lg md:text-xl text-center font-[700]">Marco T.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
