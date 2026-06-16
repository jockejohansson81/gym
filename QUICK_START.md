# CribWise Configurator — Quick Start

## 60 Seconds to Your Recommendation

### Step 1: Open the Tool
```bash
# Option A: Double-click the file
open configurator.html

# Option B: Run a web server
cd Cabinet\ configurator
python3 -m http.server 8000
# Then visit: http://localhost:8000/configurator.html
```

### Step 2: Answer 5 Simple Questions
1. **Upload your items** (CSV/JSON with item names, quantities, dimensions)
   - Sample file provided: `sample-inventory.csv`
2. **How often accessed?** (Low / Medium / High)
3. **Typical item size?** (Small / Medium / Large)
4. **Space available?** (Compact / Standard / Large)
5. **Security needed?** (Basic / Standard / Advanced)

### Step 3: Get Your Recommendation
- Primary model highlighted in green
- Alternatives shown for comparison
- Download JSON with full details

## What You'll Get

| Question | Options | Impact |
|----------|---------|--------|
| Frequency | Low (1-5x/day) → VX500/VX1000<br>Medium (6-20x/day) → VX1000/LX2000<br>High (20+/day) → LX2000/AHNO-TB-D | Determines throughput needs |
| Item Size | Small (<5cm) → Compact models<br>Medium (5-20cm) → Mid-range<br>Large (>20cm) → Large capacity | Affects shelf/compartment design |
| Space | Compact (<1m²) → VX500<br>Standard (1-2m²) → VX1000<br>Large (>2m²) → LX2000/AHNO-TB-D | Physical footprint constraint |
| Access Frequency | Low → Basic/Standard sufficient<br>Medium/High → Standard/Advanced needed | Determines control system |
| Security | Basic → Manual access<br>Standard → Card/PIN reader<br>Advanced → Biometric + audit trail | Feature set of hardware |

## Sample Files

### CSV Format (Excel-compatible)
```csv
Item Name,Quantity,Width,Height,Depth
Screwdriver,5,3,20,3
Power Drill,2,10,15,10
Hammer,8,5,30,8
```

### JSON Format
```json
[
  {
    "Item Name": "Screwdriver",
    "Quantity": 5,
    "Width": 3,
    "Height": 20,
    "Depth": 3
  }
]
```

## Hardware Models at a Glance

| Model | Capacity | Footprint | Best For |
|-------|----------|-----------|----------|
| **VX500** | 500 items | 0.36m² | Small team, compact space |
| **VX1000** | 1,000 items | 0.72m² | Medium workplace |
| **LX2000** | 2,000 items | 1.44m² | Busy operations |
| **AHNO-TB-D-192** | 3,000+ items | 2.88m² | Enterprise scale |

## Next Steps

1. ✅ Run the configurator
2. ✅ Upload your inventory
3. ✅ Answer the 5 questions
4. ✅ Get your recommendation
5. ✅ Download the configuration JSON
6. → Forward to sales team or implementation

## Need to Customize?

### Add More Questions
Edit `configurator.html` → add new `<section>` divs

### Change Hardware Models
Edit `hardwareModels` object in the script section

### Update Branding
Edit CSS `:root` variables or replace CribWise logo SVG

### Different Scoring Logic
Edit `generateRecommendation()` function

## Browser Requirements

✅ Any modern browser (Chrome, Firefox, Safari, Edge)  
✅ JavaScript enabled  
✅ ~38KB file size (no external dependencies)

## Troubleshooting

**File won't open?**
- Try opening in a different browser
- Make sure you're using a modern browser (not IE11)
- Check file path has no special characters

**File upload not working?**
- Use CSV or JSON format (not Excel directly)
- Make sure columns match: Item Name, Quantity, Width, Height, Depth
- Try the sample-inventory.csv first

**Recommendations seem off?**
- Review your answers to the 5 questions
- Check uploaded file has valid dimensions
- Try alternate answers to see different results

## More Information

📖 Full guide: `CONFIGURATOR_GUIDE.md`  
📋 Sample inventory: `sample-inventory.csv`  
🎨 Branding: CribWise Identity in `5-CribWise Brand ID Guide JUN21.pdf`

---

**Ready?** Open `configurator.html` now! 🚀
