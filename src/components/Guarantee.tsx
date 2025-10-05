import React from 'react';
import { FiShield } from 'react-icons/fi';

const Guarantee = () => {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-950 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center">
          <FiShield className="h-16 w-16 mb-4 text-indigo-600" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Enrollment is 100% Risk-Free</h2>
          <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            We are confident in the value this course provides. If you&apos;re not satisfied after the first day of the course, we will provide a <strong>100% refund, no questions asked.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;