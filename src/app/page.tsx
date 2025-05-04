'use client';

import React from 'react';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleFormSubmit = (formData: {
    vehicleNumber: string;
    driverName: string;
    soldierID: string;
    vehicleType: string;
    phoneNumber: string;
    unit: string;
    mileage: string;
    selectedService: string;
    selectedTires: string[];
    pkaNumber: string;
    needsPartsReplacement: 'yes' | 'no' | 'unknown' | '';
  }) => {
    // Store the form data in sessionStorage for the summary page
    sessionStorage.setItem('serviceRequestData', JSON.stringify({
      ...formData,
      serviceType: formData.selectedService // Map selectedService to serviceType for summary
    }));
    router.push('/summary');
  };

  return (
    <main>
      <ServiceRequestForm onSubmit={handleFormSubmit} />
    </main>
  );
}
