# How to Use the CRIBWISE Inventory Template

## Overview
The inventory template helps you organize and input the items you want to store in your CRIBWISE hardware. Two formats are provided for your convenience.

## 📋 File Options

### **Option 1: Excel Template** (`INVENTORY_TEMPLATE.xlsx`)
- Professional formatting with color-coded sections
- Easy-to-use spreadsheet interface
- Best if you're comfortable with Excel
- Can export as CSV when ready to upload

### **Option 2: CSV Template** (`INVENTORY_TEMPLATE.csv`)
- Simple, universal text format
- Works in any spreadsheet application
- Can be opened in Excel, Google Sheets, Numbers, etc.
- Easy to upload directly to the configurator

## 🎯 Step-by-Step Instructions

### Step 1: Choose Your Format
- **Excel users:** Open `INVENTORY_TEMPLATE.xlsx`
- **CSV users:** Open `INVENTORY_TEMPLATE.csv` in your preferred spreadsheet app

### Step 2: Review the Examples
The template includes 3 example items to show the format:
```
Item Name          | Quantity | Width (cm) | Height (cm) | Depth (cm)
Screwdriver        | 5        | 3          | 20          | 3
Power Drill        | 2        | 10         | 15          | 10
Hammer             | 8        | 5          | 30          | 8
```

### Step 3: Add Your Items

**For Excel:**
1. Delete the example rows (rows 5-7) or just overwrite them
2. Fill in your items starting from row 8
3. Each row = one type of item

**For CSV:**
1. Keep the header row: `Item Name,Quantity,Width (cm),Height (cm),Depth (cm)`
2. Delete the example rows (optional)
3. Add your items one per line

### Step 4: Fill in the Data

| Column | What to Enter | Example |
|--------|---------------|---------|
| **Item Name** | Name or description of the item | "Cordless Drill", "Safety Glasses", "Tool Kit" |
| **Quantity** | How many of this item you have | 2, 5, 1 |
| **Width (cm)** | Width in centimeters | 10 |
| **Height (cm)** | Height in centimeters | 15 |
| **Depth (cm)** | Depth in centimeters | 8 |

### Step 5: Save Your File

**For Excel:**
- File → Save As
- Choose format:
  - **Excel (.xlsx)** - to keep it as Excel
  - **CSV (.csv)** - if you want to use it with the configurator

**For CSV:**
- File → Save or Save As
- Keep the `.csv` extension

## 📏 How to Measure Items

### Measuring Tips
- **Measure from longest points** of each dimension
- **Use a tape measure or ruler** for accuracy
- **Include any attachments** (handles, extensions, etc.)
- **Round to nearest cm** if needed

### Example Measurements
```
Screwdriver
├─ Width (grip width): 3 cm
├─ Height (handle length): 20 cm
└─ Depth (thickness): 3 cm

Power Drill
├─ Width: 10 cm
├─ Height: 15 cm
└─ Depth: 10 cm

Paint Can
├─ Width: 15 cm
├─ Height: 25 cm (including handle)
└─ Depth: 15 cm
```

## ✅ Checklist Before Uploading

- [ ] All items have a name/description
- [ ] All quantities are filled in (numbers only)
- [ ] All three dimensions (W, H, D) are filled in
- [ ] Dimensions are in centimeters
- [ ] No empty rows in the middle of your data
- [ ] File is saved in Excel or CSV format

## 🚀 Uploading to CRIBWISE Configurator

1. Open the CRIBWISE Configurator: `configurator.html`
2. Click **"Get Started"**
3. On Question 1, click **"Upload Items List"**
4. Select your saved template file
5. Click **"Upload"** and proceed

## 💡 Pro Tips

### Add as Many Items as Needed
- Excel template has space for 20 items
- If you have more items, add additional rows
- CSV format has no row limit

### Organize by Category
Consider grouping similar items together:
```
Power Tools
├─ Drill
├─ Saw
└─ Sander

Hand Tools
├─ Screwdriver
├─ Hammer
└─ Wrench

Safety Equipment
├─ Gloves
├─ Glasses
└─ Hard Hat
```

### Estimate Quantities Realistically
- Count items currently in use
- Factor in spare stock
- Consider future additions
- Don't overestimate

### Use Consistent Measurements
- Decide on measurement approach before starting
- Measure all items the same way
- Be consistent with rounding

## ❓ Common Questions

**Q: Can I add more items than the template shows?**  
A: Yes! Just add more rows below the examples. The configurator will accept any number of items.

**Q: What if some items have very small dimensions?**  
A: Enter them as decimal numbers (e.g., 0.5 cm for a small screw). The configurator will still calculate recommendations.

**Q: Can I convert Excel to CSV?**  
A: Yes! In Excel, use File → Save As → CSV format.

**Q: What if I have items of different sizes?**  
A: That's fine! The configurator analyzes the overall profile. Just enter the actual dimensions for each item.

**Q: Can I update my inventory later?**  
A: Yes! Save a new inventory file and upload it to the configurator again for new recommendations.

## 📧 Need Help?

If you have questions about:
- **Measuring items** → Use the example measurements above
- **The configurator** → See `CONFIGURATOR_GUIDE.md`
- **Getting started** → See `QUICK_START.md`

---

**Ready?** Pick your template format and start filling in your inventory!
