'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera } from 'lucide-react';

// Add custom tooltip styles
const tooltipStyles = {
  position: 'fixed' as const,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: '500',
  zIndex: 1000,
  maxWidth: '300px',
  textAlign: 'center' as const,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  pointerEvents: 'none' as const,
  transition: 'opacity 0.15s ease-in-out'
};

const calculateTooltipPosition = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const tooltipHeight = 45; // Approximate height of tooltip
  return {
    top: rect.top - tooltipHeight - 15, // Position above with 15px gap
    left: rect.left + (rect.width / 2)
  };
};

const ServiceRequestForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [soldierID, setSoldierID] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [unit, setUnit] = useState('');
  const [mileage, setMileage] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTires, setSelectedTires] = useState<string[]>([]);
  const [pkaNumber, setPkaNumber] = useState('');
  const [needsPartsReplacement, setNeedsPartsReplacement] = useState<'yes' | 'no' | 'unknown' | ''>('');

  const serviceOptions = [
    { 
      id: 'repair', 
      label: 'תיקון נקר',
      tooltip: 'תיקון נקר כולל איתור הנקר, כולל הסרפה והחלפת שסתום'
    },
    { 
      id: 'replace', 
      label: 'החלפת צמיג',
      tooltip: 'החלפת צמיג בלבד איתור הנקר, כולל הסרפה ללא הסרפה צמיג (כוללת הסרפה ללא הסרפה שסתום)'
    },
    { 
      id: 'rim-repair', 
      label: 'תיקון חישוק',
      tooltip: 'תיקון חישוק'
    }
  ];

  const toggleTireSelection = (tireId: string) => {
    if (selectedTires.includes(tireId)) {
      setSelectedTires(selectedTires.filter(id => id !== tireId));
    } else {
      setSelectedTires([...selectedTires, tireId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-gray-900 text-white p-8 mb-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center">שירות אחזקת צמיגי רכב טקטי ומשא כבד לצה״ל</h1>
        </div>
        
        <div className="bg-white p-6 mb-6 rounded-lg shadow-sm border border-gray-300">
          <p className="text-center text-gray-800 text-lg font-medium">שלום חייל/ת, אנא הזן את פרטי הרכב והשירות הנדרש</p>
        </div>

        <div className="space-y-8 bg-white p-8 rounded-lg shadow-sm border border-gray-300">
          <div>
            <Label htmlFor="vehicleNumber" className="text-gray-800 font-medium">מספר רכב</Label>
            <Input 
              id="vehicleNumber" 
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              placeholder="הכנס/י מספר רכב"
              className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="driverName" className="text-gray-800 font-medium">שם נהג</Label>
              <Input 
                id="driverName" 
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder="שם הנהג"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="soldierID" className="text-gray-800 font-medium">מספר אישי</Label>
              <Input 
                id="soldierID" 
                value={soldierID}
                onChange={(e) => setSoldierID(e.target.value)}
                placeholder="הכנס/י מספר אישי"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
                maxLength={7}
                dir="ltr"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleType" className="text-gray-800 font-medium">סוג רכב</Label>
              <Input 
                id="vehicleType" 
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                placeholder="סוג הרכב"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="unit" className="text-gray-800 font-medium">יחידה</Label>
              <Input 
                id="unit" 
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="שם היחידה"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phoneNumber" className="text-gray-800 font-medium">טלפון</Label>
              <Input 
                id="phoneNumber" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="מספר טלפון"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
                dir="ltr"
              />
            </div>
            <div>
              <Label htmlFor="mileage" className="text-gray-800 font-medium">ק"מ רכב</Label>
              <Input 
                id="mileage" 
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                placeholder="הכנס/י מד מרחק נוכחי"
                className="mt-2 border-gray-400 focus:border-blue-500 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <Label className="text-gray-800 font-medium mb-2 block">יש לבחור את סוג הטיפול הנדרש:</Label>
            <div className="flex flex-col gap-2">
              {serviceOptions.map((option) => (
                <Button
                  key={option.id}
                  type="button"
                  variant={selectedService === option.id ? "default" : "outline"}
                  className={`w-full py-3 justify-center text-lg font-medium relative group ${
                    selectedService === option.id 
                      ? 'bg-gray-900 text-white shadow-md hover:bg-gray-800' 
                      : 'bg-gray-900 text-white shadow hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedService(option.id)}
                  data-tooltip={option.tooltip}
                  onMouseEnter={(e) => {
                    const tooltip = document.createElement('div');
                    tooltip.textContent = option.tooltip;
                    Object.assign(tooltip.style, tooltipStyles);
                    
                    const position = calculateTooltipPosition(e.currentTarget);
                    tooltip.style.top = `${position.top}px`;
                    tooltip.style.left = `${position.left}px`;
                    tooltip.style.transform = 'translateX(-50%)';
                    tooltip.style.opacity = '0';
                    
                    document.body.appendChild(tooltip);
                    e.currentTarget.dataset.tooltipElement = tooltip.id = `tooltip-${Date.now()}`;
                    
                    requestAnimationFrame(() => {
                      tooltip.style.opacity = '1';
                    });
                  }}
                  onMouseLeave={(e) => {
                    const tooltipId = e.currentTarget.dataset.tooltipElement;
                    if (tooltipId) {
                      const tooltip = document.getElementById(tooltipId);
                      if (tooltip) {
                        document.body.removeChild(tooltip);
                        delete e.currentTarget.dataset.tooltipElement;
                      }
                    }
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
          
          {selectedService === 'replace' && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 text-red-600 font-medium mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>שים לב - פעולה זו מצריכה אישור קצין רכב</span>
              </div>
              <div className="text-red-500 text-sm mb-4">יש לספק מספר פקודת עבודה (פק"ע)</div>
              <Input
                value={pkaNumber}
                onChange={(e) => setPkaNumber(e.target.value)}
                placeholder="הזן מספר פק״ע"
                className="border-red-200 focus:border-red-400 focus:ring-red-400 text-black font-medium placeholder:text-gray-600 bg-white"
              />
            </div>
          )}
          
          {selectedService === 'rim-repair' && (
            <div className="border-t border-gray-300 pt-6">
              <div className="text-gray-800 font-medium mb-4">האם התיקון כולל החלפת חלקים?</div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="partsReplacement"
                    value="yes"
                    checked={needsPartsReplacement === 'yes'}
                    onChange={(e) => setNeedsPartsReplacement('yes')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">כן</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="partsReplacement"
                    value="no"
                    checked={needsPartsReplacement === 'no'}
                    onChange={(e) => setNeedsPartsReplacement('no')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">לא</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="partsReplacement"
                    value="unknown"
                    checked={needsPartsReplacement === 'unknown'}
                    onChange={(e) => setNeedsPartsReplacement('unknown')}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">לא יודע/ת</span>
                </label>
              </div>

              {(needsPartsReplacement === 'yes' || needsPartsReplacement === 'unknown') && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 text-red-600 font-medium mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>
                      {needsPartsReplacement === 'yes' 
                        ? 'שים לב - החלפת חלקים מצריכה אישור קצין רכב'
                        : 'מחמת הספק, יש צורך באישור קצין רכב'
                      }
                    </span>
                  </div>
                  <div className="text-red-500 text-sm mb-4">יש לספק מספר פקודת עבודה (פק"ע)</div>
                  <Input
                    value={pkaNumber}
                    onChange={(e) => setPkaNumber(e.target.value)}
                    placeholder="הזן מספר פק״ע"
                    className="border-red-200 focus:border-red-400 focus:ring-red-400 text-black font-medium placeholder:text-gray-600 bg-white"
                  />
                </div>
              )}
            </div>
          )}
          
          <div className="border-t border-gray-300 pt-6">
            <Label className="text-gray-800 font-medium mb-3 block">בחר/י את מיקום הצמיג:</Label>
            <div className="flex justify-center mb-4">
              <div className="w-full max-w-2xl border border-gray-400 rounded-lg bg-white p-8 shadow-sm">
                <div className="relative h-80">
                  {/* קבינה */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-gray-100 border-2 border-gray-500 rounded-t-lg"></div>
                  
                  {/* גוף המשאית */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-32 bg-gray-50 border-2 border-gray-500"></div>
                  
                  {/* גלגלים קדמיים */}
                  <TireButton 
                    id="front-left"
                    label="קדמי שמאל"
                    isSelected={selectedTires.includes('front-left')}
                    onClick={() => toggleTireSelection('front-left')}
                    position={{ top: '14px', left: '78px' }}
                  />
                  <TireButton 
                    id="front-right"
                    label="קדמי ימין"
                    isSelected={selectedTires.includes('front-right')}
                    onClick={() => toggleTireSelection('front-right')}
                    position={{ top: '14px', right: '78px' }}
                  />
                  
                  {/* גלגלים אמצעיים - צד שמאל */}
                  <TireButton 
                    id="middle-left-1"
                    label="אמצעי שמאל 1"
                    isSelected={selectedTires.includes('middle-left-1')}
                    onClick={() => toggleTireSelection('middle-left-1')}
                    position={{ top: '60px', left: '48px' }}
                  />
                  <TireButton 
                    id="middle-left-2"
                    label="אמצעי שמאל 2"
                    isSelected={selectedTires.includes('middle-left-2')}
                    onClick={() => toggleTireSelection('middle-left-2')}
                    position={{ top: '60px', left: '20px' }}
                  />
                  
                  {/* גלגלים אמצעיים - צד ימין */}
                  <TireButton 
                    id="middle-right-1"
                    label="אמצעי ימין 1"
                    isSelected={selectedTires.includes('middle-right-1')}
                    onClick={() => toggleTireSelection('middle-right-1')}
                    position={{ top: '60px', right: '48px' }}
                  />
                  <TireButton 
                    id="middle-right-2"
                    label="אמצעי ימין 2"
                    isSelected={selectedTires.includes('middle-right-2')}
                    onClick={() => toggleTireSelection('middle-right-2')}
                    position={{ top: '60px', right: '20px' }}
                  />
                  
                  {/* גלגלים אחוריים - צד שמאל */}
                  <TireButton 
                    id="rear-left-1"
                    label="אחורי שמאל 1"
                    isSelected={selectedTires.includes('rear-left-1')}
                    onClick={() => toggleTireSelection('rear-left-1')}
                    position={{ bottom: '20px', left: '48px' }}
                  />
                  <TireButton 
                    id="rear-left-2"
                    label="אחורי שמאל 2"
                    isSelected={selectedTires.includes('rear-left-2')}
                    onClick={() => toggleTireSelection('rear-left-2')}
                    position={{ bottom: '20px', left: '20px' }}
                  />
                  
                  {/* גלגלים אחוריים - צד ימין */}
                  <TireButton 
                    id="rear-right-1"
                    label="אחורי ימין 1"
                    isSelected={selectedTires.includes('rear-right-1')}
                    onClick={() => toggleTireSelection('rear-right-1')}
                    position={{ bottom: '20px', right: '48px' }}
                  />
                  <TireButton 
                    id="rear-right-2"
                    label="אחורי ימין 2"
                    isSelected={selectedTires.includes('rear-right-2')}
                    onClick={() => toggleTireSelection('rear-right-2')}
                    position={{ bottom: '20px', right: '20px' }}
                  />
                </div>
                <div className="text-center text-sm text-gray-700 mt-3 font-medium">
                  יש ללחוץ על הצמיג/ים הרלוונטי/ם
                </div>
              </div>
            </div>
            
            {selectedTires.length > 0 && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-800 font-medium">צמיגים שנבחרו:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedTires.map(tire => (
                    <span key={tire} className="px-3 py-1 bg-blue-100 text-blue-900 text-sm rounded-full font-medium">
                      {tire.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-300 pt-6">
            <Label className="text-gray-800 font-medium mb-3 block">תמונות:</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-24 border-2 border-dashed border-gray-400 bg-gray-900 text-white hover:bg-gray-700 hover:border-blue-500 transition-colors duration-200"
              >
                <Camera className="ml-2 w-6 h-6 text-white" />
                <span>העלאת תמונת צמיג</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-24 border-2 border-dashed border-gray-400 bg-gray-900 text-white hover:bg-gray-700 hover:border-blue-500 transition-colors duration-200"
              >
                <Camera className="ml-2 w-6 h-6 text-white" />
                <span>העלאת תמונת רכב</span>
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-medium py-6 shadow-lg transform transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]" 
            size="lg"
          >
            פתיחת קריאת שירות
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper component for tire selection
interface TireButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const TireButton: React.FC<TireButtonProps> = ({ id, label, isSelected, onClick, position }) => (
  <div 
    style={{
      position: 'absolute',
      ...position,
      zIndex: isSelected ? 10 : 5
    }}
  >
    <button
      type="button"
      onClick={onClick}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
        isSelected 
          ? 'bg-blue-500 border-2 border-blue-600 shadow-md' 
          : 'bg-gray-200 border-2 border-gray-300 hover:bg-gray-300'
      }`}
    >
      {isSelected && (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-500 text-base">✓</span>
        </div>
      )}
    </button>
  </div>
);

export default ServiceRequestForm; 