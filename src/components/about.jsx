import Intake from "../components/intake";
const About = () => {
  return (
    <div>
      <div className="w-24 h-30 p-3 rounded-tr-xl rounded-bl-xl mb-8 bg-yellowpri text-center font-pop font-semibold text-xl">
        ABOUT
      </div>

      <div className="flex flex-col space-y-6  md:space-y-0 md:space-x-3">
        <div className="content h-[24rem] overflow-hidden">
          <p className="text-sm text-sub font-pop ">
            Atharva College of Engineering is a private engineering college that
            was established in 1999 and situated in Malad, Mumbai. The college
            is approved by AICTE, accredited by NAAC with a B+ grade. It is
            affiliated with Mumbai University and recognized by the Government
            of Maharashtra. Atharva College of Engineering offers only one UG
            course, B.Tech in 5 sAtharva College of Engineering is a private
            engineering college that was established in 1999 and situated in
            Malad, Mumbai. The college is approved by AICTE, accredited by NAAC
            with a B+ grade. It is affiliated with Mumbai University and
            recognized by the Government of Maharashtra. Atharva College of
            Engineering offers only one UG course, B.Tech in 5 specializations.
            The admission to the course is done on the basis of the entrance
            exams such as MHT CET or JEE Mains. B.Tech in Computer Engineering
            is the popular and most opted specialization. The total number of
            student varies between 800-2100 in various branches.Atharva College
            of Engineering is a private engineering college that was established
            in 1999 and situated in Malad, Mumbai. The college is approved by
            AICTE, accredited by NAAC with a B+ grade. It is affiliated with
            Mumbai University and recognized by the Government of Maharashtra.
            Atharva College of Engineering offers only one UG course, B.Tech in
            5 specializations. The admission to the course is done on the basis
            of the entrance exams such as MHT CET or JEE Mains. B.Tech in
            Computer Engineering is the popular and most opted specialization.
            The total number of student varies between 800-2100 in various
            branches.Atharva College of Engineering is a private engineering
            college that was established in 1999 and situated in Malad, Mumbai.
            The college is approved by AICTE, accredited by NAAC with a B+
            grade. It is affiliated with Mumbai University and recognized by the
            Government of Maharashtra. Atharva College of Engineering offers
            only one UG course, B.Tech in 5 specializations. The admission to
            the course is done on the basis of the entrance exams such as MHT
            CET or JEE Mains. B.Tech in Computer Engineering is the popular and
            most opted specialization. The total number of student varies
            between 800-2100 in various branches.Atharva College of Engineering
            is a private engineering college that was established in 1999 and
            situated in Malad, Mumbai. The college is approved by AICTE,
            accredited by NAAC with a B+ grade. It is affiliated with Mumbai
            University and recognized by the Government of Maharashtra. Atharva
            College of Engineering offers only one UG course, B.Tech in 5
            specializations. The admission to the course is done on the basis of
            the entrance exams such as MHT CET or JEE Mains. B.Tech in Computer
            Engineering is the popular and most opted specialization. The total
            number of student varies between 800-2100 in various
            branches.pecializations. The admission to the course is done on the
            basis of the entrance exams such as MHT CET or JEE Mains. B.Tech in
            Computer Engineering is the popular and most opted specialization.
            The total number of student varies between 800-2100 in various
            branches.{" "}
          </p>
        </div>

        <div className="bottom flex flex-col md:flex-row justify-between">
          <div className="intake mt-0 sm:mt-8 xl:mt-0">
            <Intake />
          </div>
          <div className="yt mt-0 sm:mt-8 xl:mt-0 sm-mr-0 xl:mr- ">
            <iframe
              className=" w-[100%] h-[400px] md:w-[400px] md:[h-[400px]] lg:w-[600px] md:h-[400px]"
              src="https://www.youtube.com/embed/R8zNJs5CYFI"
              title="Atharva Group of Institutes ( Corporate Film - 6.5 Min ) 2K"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
