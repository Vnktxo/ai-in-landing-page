// src/context/PlanContext.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a plan
interface Plan {
  name: string;
  amount: number;
}

// Define what our context will hold
interface PlanContextType {
  selectedPlan: Plan;
  selectPlan: (plan: Plan) => void;
}

// Set a default plan (your Starter Pack)
const defaultPlan: Plan = {
  name: "AI Starter Pack",
  amount: 9999, // This is the amount in Rupees
};

// Create the context
const PlanContext = createContext<PlanContextType>({
  selectedPlan: defaultPlan,
  selectPlan: () => {},
});

// Create a hook to easily use the context
export const usePlan = () => useContext(PlanContext);

// Create the "Provider" component that will wrap our app
export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(defaultPlan);

  const selectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  return (
    <PlanContext.Provider value={{ selectedPlan, selectPlan }}>
      {children}
    </PlanContext.Provider>
  );
};