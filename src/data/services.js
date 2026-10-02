import {
  Truck,
  Tractor,
  Factory,
  CircleDot,
  Wrench,
  Recycle,
} from "lucide-react";

export const services = [
  {
    id: "truck-tyre-retreading",
    title: "Truck Tyre Retreading",
    shortDescription:
      "Tyre retreading services for eligible truck and commercial vehicle tyre casings.",
    description:
      "We provide tyre retreading solutions for suitable truck and commercial vehicle tyre casings. Each casing should be assessed for condition and suitability before the appropriate service is undertaken.",
    icon: Truck,
    vehicleTypes: ["Trucks", "Commercial Vehicles"],
  },

  {
    id: "tractor-tyre-retreading",
    title: "Tractor Tyre Retreading",
    shortDescription:
      "Retreading solutions for suitable tractor and agricultural vehicle tyres.",
    description:
      "Our services include tyre retreading support for suitable tractor and agricultural vehicle applications, subject to casing condition and technical suitability.",
    icon: Tractor,
    vehicleTypes: ["Tractors", "Agricultural Vehicles"],
  },

  {
    id: "industrial-tyre-services",
    title: "Industrial Tyre Services",
    shortDescription:
      "Tyre services for industrial and heavy-duty vehicle applications.",
    description:
      "We provide tyre-related services for industrial and heavy-duty vehicle applications, including inspection, repair and retreading where technically appropriate.",
    icon: Factory,
    vehicleTypes: ["Industrial Vehicles", "Heavy-Duty Vehicles"],
  },

  {
    id: "tyre-inspection",
    title: "Tyre Inspection",
    shortDescription:
      "Inspection of tyre and casing condition before repair or retreading.",
    description:
      "Tyre and casing condition is an important consideration before repair or retreading. We inspect tyres to help determine whether a tyre is suitable for the required service.",
    icon: CircleDot,
    vehicleTypes: ["Commercial", "Agricultural", "Industrial"],
  },

  {
    id: "puncture-repair",
    title: "Puncture Repair",
    shortDescription:
      "Puncture inspection and repair for applicable tyres.",
    description:
      "We provide puncture inspection and repair services for tyres where the condition and location of the damage make repair technically appropriate.",
    icon: Wrench,
    vehicleTypes: ["Cars", "Commercial Vehicles", "Tractors", "Industrial Vehicles"],
  },

  {
    id: "old-tyre-purchase",
    title: "Old Tyre Purchase",
    shortDescription:
      "Purchase of old and used tyres subject to type and condition.",
    description:
      "We purchase old and used tyres subject to tyre type, casing condition, quantity and evaluation.",
    icon: Recycle,
    vehicleTypes: ["Used Tyres", "Old Tyres", "Commercial Tyres"],
  },
];