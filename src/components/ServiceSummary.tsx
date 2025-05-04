'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Car, User, Hash, Building, Wrench } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ServiceSummaryProps {
  requestData: {
    vehicleNumber: string;
    driverName: string;
    soldierID: string;
    vehicleType: string;
    phoneNumber: string;
    unit: string;
    mileage: string;
    serviceType: string;
    selectedTires: string[];
    pkaNumber?: string;
  };
  onBackClick: () => void;
}

const ServiceSummary: React.FC<ServiceSummaryProps> = ({ requestData, onBackClick }) => {
  const router = useRouter();
  
  const centers = [
    {
      id: 1,
      name: 'פנצ׳רית צומת גולני',
      distance: '2.3',
      address: 'צומת גולני',
      phone: '04-6721234',
      status: 'פתוח',
      eta: '15',
      hours: '24/7'
    },
    {
      id: 2,
      name: 'שירותי צמיגים עפולה',
      distance: '12.5',
      address: 'א.ת. עפולה',
      phone: '04-6584321',
      status: 'פתוח',
      eta: '25',
      hours: '07:00-19:00'
    }
  ];

  const handleServiceSelection = (centerId: number) => {
    router.push('/confirmation');
  };

  const formatTiresList = (tires: string[]) => {
    return tires.map(tire => {
      const [position, side, number] = tire.split('-');
      return `${position} ${side}${number ? ` ${number}` : ''}`;
    }).join(', ');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
      <div className="mx-auto max-w-2xl space-y-6">
        <Button 
          onClick={onBackClick}
          variant="outline"
          className="mb-4 w-full"
        >
          חזור לטופס
        </Button>
        {/* סיכום הבקשה */}
        <Card>
          <CardHeader className="bg-gray-900 text-white">
            <CardTitle className="text-center text-xl">פרטי קריאת השירות</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">מספר רכב</div>
                    <div className="font-medium">{requestData.vehicleNumber}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">שם הנהג</div>
                    <div className="font-medium">{requestData.driverName}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">מספר אישי</div>
                    <div className="font-medium">{requestData.soldierID}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">יחידה</div>
                    <div className="font-medium">{requestData.unit}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">סוג השירות</div>
                    <div className="font-medium">{requestData.serviceType}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-gray-700" />
                  <div>
                    <div className="text-sm text-gray-700">צמיגים לטיפול</div>
                    <div className="font-medium">{formatTiresList(requestData.selectedTires)}</div>
                  </div>
                </div>
                {requestData.pkaNumber && (
                  <div className="flex items-center gap-2">
                    <Hash className="h-5 w-5 text-gray-700" />
                    <div>
                      <div className="text-sm text-gray-700">מספר פק"ע</div>
                      <div className="font-medium">{requestData.pkaNumber}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* רשימת נקודות שירות */}
        <Card>
          <CardHeader className="bg-gray-900 text-white">
            <CardTitle className="text-center">נקודות שירות זמינות</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="font-medium text-gray-900">מיקומך הנוכחי:</div>
              <div className="text-gray-700">רמת הגולן - כביש 92</div>
            </div>

            <div className="space-y-4">
              {centers.map(center => (
                <Card key={center.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{center.name}</h3>
                        <div className="text-sm text-gray-700">{center.distance} ק״מ ממיקומך</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-sm ${
                        center.status === 'פתוח' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {center.status}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-700" />
                        <span className="text-gray-900">{center.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-700" />
                        <span className="text-gray-900">{center.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-700" />
                        <span className="text-gray-900">שעות פעילות: {center.hours}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-900">
                        זמן הגעה משוער: {center.eta} דקות
                      </div>
                      <Button 
                        className="bg-cyan-500 hover:bg-cyan-400"
                        onClick={() => handleServiceSelection(center.id)}
                      >
                        בחר נקודת שירות
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceSummary; 