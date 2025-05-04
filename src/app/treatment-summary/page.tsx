'use client';

import { useState } from 'react';
import { Check, Camera, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function TreatmentSummary() {
  const [signed, setSigned] = useState(false);
  const [signature, setSignature] = useState('');
  const router = useRouter();
  
  const handleSign = () => {
    setSigned(true);
    setSignature('ישראל ישראלי - 8724365');
  };

  const handleBack = () => {
    router.back();
  };

  const handleFinish = () => {
    router.push('/');
  };

  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-gray-50">
      {/* כותרת */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center font-bold relative">
        <div className="max-w-2xl mx-auto relative">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
          >
            <ArrowRight className="h-5 w-5" />
            חזור
          </Button>
          סיכום טיפול - פנצ'רית צומת גלילי
        </div>
      </div>
      
      {/* תוכן */}
      <div className="flex-grow">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          {/* סטטוס טיפול */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center text-green-600 font-bold text-lg mb-1">
              <Check className="ml-2" size={20} />
              <span>הטיפול הושלם בהצלחה</span>
            </div>
            <div className="text-gray-700">
              מספר הזמנה: 28546-923
            </div>
          </div>
          
          {/* פרטי הטיפול */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פרטי הטיפול</h2>
            
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
                <span className="text-gray-900">ק"מ רכב:</span>
                <span className="font-medium text-gray-900">12,456</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-900">מיקום הצמיג:</span>
                <span className="font-medium text-gray-900">קדמי שמאל</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-900">מס' פק"ע:</span>
                <span className="font-medium text-gray-900">P-728394</span>
              </div>
            </div>
          </div>
          
          {/* פעולות שבוצעו */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פעולות שבוצעו</h2>
            
            <ul className="divide-y">
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>פירוק אופן והסרת צמיג</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>איתור נקר במיקום 4 שעות</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>תיקון נקר</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>החלפת שסתום</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>הרכבת צמיג על החישוק</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>ניפוח לפי טבלת לחצי אוויר</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>איזון האופן</span>
              </li>
              <li className="py-2 flex items-center text-gray-900">
                <Check size={16} className="text-green-500 ml-2" />
                <span>החזרת האופן לרכב והידוק אומים</span>
              </li>
            </ul>
          </div>
          
          {/* חלקים שהושקעו */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">חלקים שהושקעו</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-right py-2 px-2 text-gray-900">שם הפריט</th>
                    <th className="text-right py-2 px-2 text-gray-900">כמות</th>
                    <th className="text-right py-2 px-2 text-gray-900">מקור</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-2 text-gray-900">שסתום</td>
                    <td className="py-2 px-2 text-gray-900">1</td>
                    <td className="py-2 px-2 text-gray-900">צה"ל</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-900">חומר תיקון נקר</td>
                    <td className="py-2 px-2 text-gray-900">1</td>
                    <td className="py-2 px-2 text-gray-900">ספק</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* סיכום משך הטיפול */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between">
              <span className="text-gray-900">שעת התחלה:</span>
              <span className="font-medium text-gray-900">10:15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-900">שעת סיום:</span>
              <span className="font-medium text-gray-900">10:45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-900">משך זמן טיפול:</span>
              <span className="font-medium text-gray-900">30 דקות</span>
            </div>
          </div>
          
          {/* חתימה דיגיטלית */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">אישור קבלת טיפול</h2>
            
            {!signed ? (
              <div className="text-center p-4">
                <p className="mb-4 text-gray-900">לחתימה על קבלת הטיפול, יש ללחוץ על הכפתור:</p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={handleBack}
                    className="bg-gray-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    תיקון
                  </button>
                  <button 
                    onClick={handleSign}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    חתום על אישור הטיפול
                  </button>
                </div>
              </div>
            ) : (
              <div className="border rounded p-3 mb-3">
                <p className="text-center italic border-b pb-2 mb-2 text-gray-900">
                  {signature}
                </p>
                <p className="text-center text-sm text-gray-700">
                  נחתם דיגיטלית בתאריך 05/05/2025, שעה 10:47
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* כפתור סיום */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-2xl mx-auto p-4">
          <button 
            onClick={handleFinish}
            className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-bold transition-colors"
            disabled={!signed}
          >
            <Check className="ml-2" size={20} />
            <span>סיים טיפול וחזור למסך הראשי</span>
          </button>
        </div>
      </div>
    </div>
  );
} 