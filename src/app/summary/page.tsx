'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ServiceSummary from '@/components/ServiceSummary';

interface ServiceRequestData {
  vehicleNumber: string;
  driverName: string;
  soldierID: string;
  vehicleType: string;
  phoneNumber: string;
  unit: string;
  mileage: string;
  serviceType: string;
  selectedTires: string[];
  pkaNumber: string;
}

export default function SummaryPage() {
  const router = useRouter();
  const [requestData, setRequestData] = useState<ServiceRequestData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('serviceRequestData');
    if (storedData) {
      setRequestData(JSON.parse(storedData));
    } else {
      // If no data is found, redirect back to the form
      router.push('/');
    }
  }, [router]);

  const handleBackClick = () => {
    router.push('/');
  };

  if (!requestData) {
    return <div>Loading...</div>;
  }

  return (
    <ServiceSummary 
      requestData={requestData}
      onBackClick={handleBackClick}
    />
  );
} 