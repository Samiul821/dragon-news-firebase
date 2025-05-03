import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
        বিদ্যুৎ বিভ্রাটে অচল রাজধানী: গরমে জনদুর্ভোগ চরমে, হাসপাতাল-কলকারখানায় কাজ বন্ধ, লোডশেডিং পরিস্থিতি নিয়ন্ত্রণে জরুরি বৈঠক ডেকেছে সরকার, তবে স্বাভাবিক অবস্থায় ফিরতে সময় লাগবে আরও ৪৮ ঘণ্টা, জানাল বিদ্যুৎ বিভাগ।
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
