# CribWise Hardware Configurator Guide

## Overview
The CribWise Hardware Configurator is an interactive web-based tool that recommends the ideal vending hardware based on user needs and item specifications.

## How to Use

### 1. **Open the Configurator**
   - Open `configurator.html` in any modern web browser
   - Or run a local server: `python3 -m http.server 8000` and navigate to `http://localhost:8000/configurator.html`

### 2. **Follow the 5-Question Flow**

#### **Question 1: Upload Items List**
   - Upload a CSV or Excel file with items to be stored
   - Required columns: Item Name, Quantity, Width (cm), Height (cm), Depth (cm)
   - Supported formats: CSV, JSON, Excel (convert to CSV)
   - File preview shows first 5 items with item count
   
   **Example CSV:**
   ```
   Item Name,Quantity,Width,Height,Depth
   Screwdriver,5,3,20,3
   Power Drill,2,10,15,10
   Hammer,8,5,30,8
   ```

#### **Question 2: Expected Daily Access Frequency**
   - **Low** (1-5 times/day): Small team, infrequent access
   - **Medium** (6-20 times/day): Moderate team, regular access
   - **High** (20+ times/day): Large team, frequent access

#### **Question 3: Primary Item Size Profile**
   - **Small Items** (< 5cm): Documents, cards, small parts
   - **Medium Items** (5-20cm): Tools, components, supplies
   - **Large Items** (> 20cm): Equipment, assemblies

#### **Question 4: Available Space**
   - **Compact** (< 1m² footprint): Limited space, wall-mount preferred
   - **Standard** (1-2m² footprint): Regular space availability
   - **Large** (> 2m² footprint): Generous space for max capacity

#### **Question 5: Access Control Requirements**
   - **Basic**: Simple manual access, no electronic controls
   - **Standard**: Card reader or PIN access, basic logging
   - **Advanced**: Biometric, detailed audit trail, reporting

### 3. **View Recommendations**
   - Primary recommendation highlighted in green
   - Alternative options shown for comparison
   - Each model shows:
     - Capacity (items)
     - Dimensions (W × H × D)
     - Footprint (m²)
     - Access speed

### 4. **Download Configuration**
   - Click "Download Configuration" to save recommendations as JSON
   - File includes:
     - Recommended hardware model
     - Your answers to all 5 questions
     - Uploaded items list
     - Timestamp

## Hardware Models

### **VX500**
- **Capacity:** 500 items
- **Dimensions:** 60 × 60 × 60cm
- **Footprint:** 0.36m²
- **Best for:** Compact spaces with small items and low frequency
- **Speed:** Standard

### **VX1000**
- **Capacity:** 1000 items
- **Dimensions:** 60 × 120 × 60cm
- **Footprint:** 0.72m²
- **Best for:** Medium workplaces with diverse item sizes
- **Speed:** Standard

### **LX2000**
- **Capacity:** 2000 items
- **Dimensions:** 120 × 120 × 80cm
- **Footprint:** 1.44m²
- **Best for:** Busy operations with frequent access
- **Speed:** Fast

### **AHNO-TB-D-192**
- **Capacity:** 3000+ items
- **Dimensions:** 240 × 120 × 100cm
- **Footprint:** 2.88m²
- **Best for:** Enterprise operations with high throughput
- **Speed:** Very Fast

## Features

✅ **CribWise Branding**
- Official CribWise color scheme (#010101 primary dark)
- Embedded SVG logo in dark and light variants
- Professional styling aligned with brand guidelines

✅ **Smart Recommendations**
- Scoring algorithm considers all 5 factors
- Models ranked by fit
- Detailed specifications for each option

✅ **File Import**
- Upload items inventory (CSV/JSON)
- Auto-parse and preview data
- Analyzes dimensions and quantities

✅ **Data Export**
- Download complete configuration as JSON
- Includes all user inputs and recommendations
- Timestamped for record-keeping

✅ **Mobile Responsive**
- Works on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized layout for all screen sizes

✅ **Form Validation**
- Prevents skipping questions
- Validates file uploads
- Real-time progress tracking

## Customization Options

### To Add New Hardware Models:
Edit the `hardwareModels` object in the script section:
```javascript
'ModelName': {
    name: 'ModelName',
    capacity: 'X items',
    dimensions: 'WxHxD cm',
    space: 0.00,
    speed: 'Speed',
    price: '$$$',
    bestFor: ['space', 'frequency', 'size'],
    description: 'Description here'
}
```

### To Modify Questions:
Edit the section divs and question groups:
```html
<div class="section" id="section-X">
    <div class="step-indicator">Question X of 5</div>
    <div class="question-group">
        <!-- Question content -->
    </div>
</div>
```

### To Change Colors:
Modify the CSS variables in the `:root` selector:
```css
:root {
    --primary-dark: #010101;     /* CribWise brand color */
    --primary-light: #ffffff;
    --accent-blue: #1e40af;
    --success: #10b981;
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported (uses modern CSS/JS)

## File Structure

```
Cabinet configurator/
├── configurator.html          # Main application (single file)
├── CONFIGURATOR_GUIDE.md      # This guide
├── CRIBWISE logotypes/
│   ├── Dark/
│   │   └── CribWise-Logo-Black.svg
│   └── Light/
│       └── CribWise-Logo-White.svg
└── configuration files/
    ├── Confguration AHNO-TB-D-192.xlsx
    ├── LX2000 Config File.xls
    ├── VX1000 Config File.xls
    └── VX500 Config File.xls
```

## Example Workflow

1. **User Opens:** `configurator.html`
2. **Question 1:** Uploads `inventory.csv` with tools
3. **Questions 2-5:** Answers about frequency, space, size, and access
4. **Results:** Gets recommendations (e.g., "VX1000 Recommended")
5. **Download:** Saves `cribwise-configuration-2026-06-11.json`
6. **Next Step:** Forwards file to sales/implementation team

## Technical Details

- **Format:** Single-file HTML with embedded CSS and JavaScript
- **Dependencies:** None (vanilla JavaScript)
- **File Size:** ~38KB
- **No server required:** Works offline or with simple HTTP server
- **Data Privacy:** All processing happens client-side, no data sent externally

## Iteration & Feedback

Want to adjust the questions or recommendations? The tool is designed for easy iteration:

1. **Change questions:** Modify HTML question groups
2. **Adjust scoring:** Edit the `generateRecommendation()` function
3. **Add models:** Extend the `hardwareModels` object
4. **Rebrand:** Update CSS variables and logo references

All changes persist in the single HTML file—no build process needed.

---

**Last Updated:** June 11, 2026  
**Version:** 1.0  
**Status:** Ready for testing and deployment
