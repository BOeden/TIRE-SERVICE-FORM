'use client';

import React from 'react';
import './styles.css';

export default function BatchManagement() {
  return (
    <>
      <div className="header">
        ניהול מנת צמיגים גדולה
      </div>
      
      <div className="container">
        {/* פרטי המנה */}
        <div className="card">
          <h2 className="card-title">פרטי המנה</h2>
          
          <div className="form-row">
            <div className="form-col">
              <div className="form-group">
                <label className="form-label required">שם מבקש:</label>
                <input type="text" className="form-control" value="רם" readOnly />
              </div>
              
              <div className="form-group">
                <label className="form-label required">יחידה:</label>
                <input type="text" className="form-control" value="חטיבה 7" readOnly />
              </div>
              
              <div className="form-group">
                <label className="form-label">מס' אישי:</label>
                <input type="text" className="form-control" value="7654321" readOnly />
              </div>
            </div>
            
            <div className="form-col">
              <div className="form-group">
                <label className="form-label required">מספר מנה:</label>
                <input type="text" className="form-control" value="BN-25052025-01" readOnly />
              </div>
              
              <div className="form-group">
                <label className="form-label required">תאריך יצירה:</label>
                <input type="text" className="form-control" value="05/05/2025" readOnly />
              </div>
              
              <div className="form-group">
                <label className="form-label required">מספר פק"ע:</label>
                <input type="text" className="form-control" placeholder='הזן מספר פק"ע' />
              </div>
            </div>
          </div>
          
          <div className="flex-end mt-4">
            <button className="btn btn-success">אישור</button>
          </div>
        </div>
        
        {/* הוספת רכב למנה */}
        <div className="card">
          <h2 className="card-title">הוספת רכב למנה</h2>
          
          <div className="form-row">
            <div className="form-col">
              <div className="form-group">
                <label className="form-label required">מספר רכב (צ'):</label>
                <input type="text" className="form-control" placeholder="הזן מספר רכב (צ')" />
              </div>
              
              <div className="form-group">
                <label className="form-label required">סוג רכב:</label>
                <select className="form-control">
                  <option value="">- בחר סוג רכב -</option>
                  <option>משאית תובלה</option>
                  <option>האמר</option>
                  <option>טטרה</option>
                  <option>אושקוש</option>
                  <option>ריאו</option>
                  <option>לנדרובר</option>
                  <option>אחר</option>
                </select>
              </div>
            </div>
            
            <div className="form-col">
              <div className="form-group">
                <label className="form-label required">מספר גלגלים ברכב:</label>
                <select className="form-control">
                  <option>4</option>
                  <option selected>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>10</option>
                  <option>12</option>
                </select>
                <div className="form-hint">(כולל גלגל חליפי)</div>
              </div>
              
              <div className="form-group">
                <label className="form-label required">ק"מ נוכחי של הרכב:</label>
                <input type="number" className="form-control" placeholder='הזן ק"מ נוכחי' />
                <div className="form-hint">נדרש לפי מפרט המכרז, סעיף 5.2</div>
              </div>
            </div>
          </div>
          
          <div className="flex-end mt-4">
            <button className="btn btn-primary">הוסף רכב</button>
          </div>
        </div>
        
        {/* רשימת רכבים במנה */}
        <div className="card">
          <h2 className="card-title">רשימת רכבים במנה</h2>
          
          <table>
            <thead>
              <tr>
                <th>מס' רכב</th>
                <th>סוג רכב</th>
                <th>מס' גלגלים</th>
                <th>ק"מ נוכחי</th>
                <th>סטטוס</th>
                <th>פעולות</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7381549</td>
                <td>משאית תובלה</td>
                <td>5</td>
                <td>12,456</td>
                <td><span className="badge badge-success">טופל</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">צפה בפרטים</button>
                </td>
              </tr>
              <tr>
                <td>7382550</td>
                <td>האמר</td>
                <td>5</td>
                <td>8,720</td>
                <td><span className="badge badge-success">טופל</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">צפה בפרטים</button>
                </td>
              </tr>
              <tr>
                <td>7383551</td>
                <td>טטרה</td>
                <td>6</td>
                <td>15,980</td>
                <td><span className="badge badge-primary">בטיפול</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">המשך טיפול</button>
                </td>
              </tr>
              <tr>
                <td>7384552</td>
                <td>אושקוש</td>
                <td>7</td>
                <td>6,432</td>
                <td><span className="badge badge-primary">בטיפול</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">המשך טיפול</button>
                </td>
              </tr>
              <tr>
                <td>7385553</td>
                <td>ריאו</td>
                <td>6</td>
                <td>9,841</td>
                <td><span className="badge badge-warning">ממתין</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">התחל טיפול</button>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div className="summary-box">
            <span className="summary-item">סה"כ גלגלים במנה: 29</span>
            <span className="divider">|</span>
            <span className="summary-item">טופלו: 15</span>
            <span className="divider">|</span>
            <span className="summary-item">נותרו: 14</span>
          </div>
        </div>
        
        {/* כפתורי פעולה */}
        <div className="flex-end mt-4">
          <button className="btn btn-success">סגור מנה והגש לתשלום</button>
        </div>
      </div>
    </>
  );
} 