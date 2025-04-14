import React from "react";
import {
  CalendarDays,
  Store,
  PiggyBank,
  Users,
  CheckSquare,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { icon: CalendarDays, number: 4, label: "Years" },
  { icon: Store, number: 100, label: "Brands" },
  { icon: PiggyBank, number: 5000, label: "Deals" },
  { icon: Users, number: 1500, label: "Team" },
  { icon: CheckSquare, number: 50, label: "Cities" },
  { icon: CheckCircle, number: 14, label: "Countries" },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
        {stats.map((item, index) => {
          const Icon = item.icon;
          const direction = index % 2 === 0 ? -50 : 50; // alternate direction

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Icon
                size={40}
                className="text-[#0F172A]"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                <CountUp start={0} end={item.number} duration={2} />{" "}
                <span className="text-[#fbbf24]">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
