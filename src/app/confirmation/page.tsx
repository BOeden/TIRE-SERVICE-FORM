'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Phone, Navigation, Save, Home, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServiceConfirmation() {
  const [status, setStatus] = useState('נשלחה');
  const router = useRouter();
  
  const handleArrival = () => {
    setStatus('הגעתי לצמיגייה');
    router.push('/treatment');
  };

  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-gray-50">
      {/* כותרת */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center font-bold">
        אישור הזמנת שירות - פנצ'רית צומת גלילי
      </div>
      
      {/* תוכן */}
      <div className="flex flex-col p-6 space-y-4 flex-grow max-w-2xl mx-auto w-full">
        {/* סטטוס הזמנה */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-blue-600 font-bold text-lg mb-1">
              ההזמנה נשלחה לצמיגייה
            </div>
            <div className="text-gray-900">
              מספר הזמנה: 28546-923
            </div>
          </CardContent>
        </Card>
        
        {/* סיכום פרטי ההזמנה */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פרטי ההזמנה</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-900">סוג שירות:</span>
                <span className="font-medium text-gray-900">תיקון נקר</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-900">מספר רכב:</span>
                <span className="font-medium text-gray-900">7381549</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-900">שם הנהג:</span>
                <span className="font-medium text-gray-900">ישראל ישראלי</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-900">מספר אישי:</span>
                <span className="font-medium text-gray-900">8724365</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* פרטי הצמיגייה */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פרטי הצמיגייה</h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-gray-700 mt-1 ml-2 flex-shrink-0" size={18} />
                <div>
                  <div className="font-medium text-gray-900">פנצ'רית צומת גלילי</div>
                  <div className="text-gray-900 text-sm">רחוב הגולן 92, רמת הגולן</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-gray-700 ml-2 flex-shrink-0" size={18} />
                <div className="font-medium text-gray-900">04-6721234</div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">שעות פעילות:</span>
                <span className="font-medium text-gray-900">07:00-19:00</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-900">זמן טיפול משוער:</span>
                <span className="font-medium text-gray-900">45 דקות</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* הוראות המשך */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">הוראות המשך</h2>
            
            <ul className="list-disc pr-5 space-y-2 text-gray-900">
              <li>נא להגיע לצמיגייה עם הרכב</li>
              <li>בהגעה, הצג את מספר ההזמנה לנציג הצמיגייה</li>
              <li>הודעה נשלחה לצמיגייה והם מצפים להגעתך</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="text-center text-gray-900 text-sm">
          ההזמנה תקפה ל-24 שעות מרגע אישורה
        </div>

        {/* כפתור הגעתי */}
        <div className="mt-6">
          <Button 
            onClick={handleArrival}
            className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-white py-6 px-4 rounded-lg font-bold text-lg transition-colors duration-200"
          >
            <ArrowLeft className="ml-2" size={20} />
            <span>הגעתי לצמיגייה</span>
          </Button>
        </div>
      </div>
    </div>
  );
} 