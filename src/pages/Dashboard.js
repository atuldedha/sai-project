import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import ProfileSection from "../components/ProfileSection";
import SearchHistorySection from "../components/SearchHistorySection";
import PaymentHistorySection from "../components/PaymentHistorySection";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(userInfo).length) {
      navigate("/login", {
        replace: true,
      });
    }
    setLoading(false);
  }, [userInfo]);

  return (
    !loading && (
      <div className="bg-bgColor2 w-full flex flex-col px-4 lg:px-16 xl:px-64">
        <h3 className="text-xl lg:text-2xl xl:text-4xl text-blue4 font-inter font-semibold mb-2 w-full text-center lg:text-start mt-10">
          Hi {userInfo?.firstName},
        </h3>

        <div className="flex flex-col items-center lg:flex-row lg:space-x-10 mt-6 pb-4">
          {/* profile info section */}
          <section className="w-full lg:w-max pb-8 lg:pb-14 basis-1/3 flex items-center justify-center max-w-xl">
            <ProfileSection userInfo={userInfo} />
          </section>

          <section className="grid grid-cols-1 gap-5 basis-2/3 max-w-xl w-full pb-8 lg:pb-32">
            {/* Search History  section */}
            <section className="w-full">
              <SearchHistorySection userInfo={userInfo} />
            </section>

            {/* Payment History  section */}
            <section className="w-full ">
              <PaymentHistorySection userInfo={userInfo} />
            </section>
          </section>
        </div>
      </div>
    )
  );
};

export default Dashboard;
