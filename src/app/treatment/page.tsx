'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

interface PartItem {
  id: string;
  name: string;
  quantity: number;
  source: string;
}

export default function TreatmentForm() {
  const [startTime, setStartTime] = useState('10:15');
  const [notes, setNotes] = useState('');
  const [newAction, setNewAction] = useState('');
  const router = useRouter();
  
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'פירוק אופן והסרת צמיג', checked: true },
    { id: '2', text: 'איתור נקר', checked: false },
    { id: '3', text: 'תיקון נקר', checked: false },
    { id: '4', text: 'החלפת שסתום', checked: false },
    { id: '5', text: 'הרכבת צמיג על החישוק', checked: false },
    { id: '6', text: 'ניפוח לפי טבלת לחצי אוויר', checked: false },
    { id: '7', text: 'איזון האופן', checked: false },
    { id: '8', text: 'החזרת האופן לרכב והידוק אומים', checked: false },
  ]);

  const [parts, setParts] = useState<PartItem[]>([
    { id: '1', name: 'שסתום', quantity: 1, source: 'צה"ל' },
    { id: '2', name: 'חומר תיקון נקר', quantity: 1, source: 'ספק' },
  ]);

  const [newPart, setNewPart] = useState({ name: '', quantity: 1, source: 'צה"ל' });

  const toggleChecklistItem = (id: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addAction = () => {
    if (newAction.trim()) {
      setChecklist([...checklist, { 
        id: String(Date.now()), 
        text: newAction, 
        checked: false 
      }]);
      setNewAction('');
    }
  };

  const removePart = (id: string) => {
    setParts(parts.filter(part => part.id !== id));
  };

  const addPart = () => {
    if (newPart.name.trim()) {
      setParts([...parts, { ...newPart, id: String(Date.now()) }]);
      setNewPart({ name: '', quantity: 1, source: 'צה"ל' });
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    router.push('/treatment-summary');
  };

  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-gray-50">
      {/* כותרת */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center font-bold">
        טופס תיעוד טיפול - פנצ'רית צומת גלילי
      </div>
      
      <div className="max-w-2xl mx-auto w-full p-4 space-y-4">
        {/* סטטוס ופרטי הזמנה */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-blue-600 font-bold text-lg mb-1">
              הרכב בטיפול
            </div>
            <div className="text-gray-900">
              מספר הזמנה: 28546-923
            </div>
          </CardContent>
        </Card>
        
        {/* פרטי ההזמנה */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פרטי ההזמנה</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-700">סוג שירות:</div>
                <div className="font-medium text-gray-900">תיקון נקר</div>
              </div>
              
              <div>
                <div className="text-gray-700">מספר רכב:</div>
                <div className="font-medium text-gray-900">7381549</div>
              </div>
              
              <div>
                <div className="text-gray-700">שם הנהג:</div>
                <div className="font-medium text-gray-900">ישראל ישראלי</div>
              </div>
              
              <div>
                <div className="text-gray-700">מספר אישי:</div>
                <div className="font-medium text-gray-900">8724365</div>
              </div>
              
              <div>
                <div className="text-gray-700">מועד פתיחת הזמנה:</div>
                <div className="font-medium text-gray-900">05/05/2025 10:00</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* נתוני טיפול */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">נתוני טיפול לרישום</h2>
            
            <div className="space-y-4">
              <div>
                <Label className="text-gray-700">שעת התחלת טיפול:</Label>
                <Input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* צילום הצמיג לפני טיפול */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">צילום הצמיג לפני טיפול</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p className="text-gray-700 font-medium">לחץ כאן לצילום הצמיג</p>
              <p className="text-gray-500 text-sm mt-1">צלם את הצמיג לתיעוד התקלה לפני הטיפול</p>
            </div>
          </CardContent>
        </Card>

        {/* פעולות שבוצעו */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">פעולות שבוצעו</h2>
            
            <div className="space-y-2">
              {checklist.map(item => (
                <div key={item.id} className="flex items-center">
                  <div
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer mr-2 ${
                      item.checked 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300'
                    }`}
                  >
                    {item.checked && '✓'}
                  </div>
                  <span className="text-gray-900">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 mt-4">
              <Input
                value={newAction}
                onChange={(e) => setNewAction(e.target.value)}
                placeholder="הוסף פעולה חדשה"
              />
              <Button 
                onClick={addAction}
                className="bg-blue-500 hover:bg-blue-400 text-white"
              >
                הוסף
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* חלקים שהושקעו */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">חלקים שהושקעו</h2>
            
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-right py-2 px-4 text-gray-900 font-medium">שם הפריט</th>
                  <th className="text-right py-2 px-4 text-gray-900 font-medium">כמות</th>
                  <th className="text-right py-2 px-4 text-gray-900 font-medium">מקור</th>
                  <th className="text-right py-2 px-4 text-gray-900 font-medium">פעולות</th>
                </tr>
              </thead>
              <tbody>
                {parts.map(part => (
                  <tr key={part.id} className="border-t border-gray-200">
                    <td className="py-2 px-4 text-gray-900">{part.name}</td>
                    <td className="py-2 px-4 text-gray-900">{part.quantity}</td>
                    <td className="py-2 px-4 text-gray-900">{part.source}</td>
                    <td className="py-2 px-4">
                      <button 
                        onClick={() => removePart(part.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              <Input
                value={newPart.name}
                onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
                placeholder="שם הפריט"
                className="text-gray-900 placeholder:text-gray-500"
              />
              <Input
                type="number"
                min="1"
                value={newPart.quantity}
                onChange={(e) => setNewPart({ ...newPart, quantity: parseInt(e.target.value) || 1 })}
                className="text-gray-900"
              />
              <Select 
                value={newPart.source}
                onValueChange={(value) => setNewPart({ ...newPart, source: value })}
              >
                <SelectTrigger className="text-gray-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="צה&quot;ל" className="text-gray-900">צה"ל</SelectItem>
                  <SelectItem value="ספק" className="text-gray-900">ספק</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={addPart}
              className="mt-2 bg-blue-500 hover:bg-blue-400 text-white"
            >
              הוסף פריט
            </Button>
          </CardContent>
        </Card>
        
        {/* צילום הצמיג אחרי טיפול */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">צילום הצמיג אחרי טיפול</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p className="text-gray-700 font-medium">לחץ כאן לצילום הצמיג</p>
              <p className="text-gray-500 text-sm mt-1">צלם את הצמיג לתיעוד התוצאה אחרי הטיפול</p>
            </div>
          </CardContent>
        </Card>
        
        {/* הערות נוספות */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold border-b pb-2 mb-3 text-gray-900">הערות נוספות</h2>
            
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="הערות נוספות לגבי הטיפול"
              rows={4}
              className="w-full text-gray-900 placeholder:text-gray-500"
            />
          </CardContent>
        </Card>
        
        {/* כפתור סיום */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-400 text-white py-6 text-lg font-bold"
        >
          ✓ סיים מילוי טופס ואשר טיפול
        </Button>
      </div>
    </div>
  );
} 