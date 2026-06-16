// Test the core recommendation logic
const hardwareModels = {
    'VX500': { name: 'VX500', capacity: '500 items', space: 0.36, bestFor: ['compact', 'low', 'small'] },
    'VX1000': { name: 'VX1000', capacity: '1000 items', space: 0.72, bestFor: ['standard', 'medium', 'medium'] },
    'LX2000': { name: 'LX2000', capacity: '2000 items', space: 1.44, bestFor: ['standard', 'high', 'large'] },
    'AHNO-TB-D-192': { name: 'AHNO-TB-D-192', capacity: '3000+ items', space: 2.88, bestFor: ['large', 'high', 'large'] }
};

// Test case 1: Small business, compact space
console.log("TEST 1: Small business with compact space");
const frequency = 'low';
const itemSize = 'small';
const space = 'compact';
console.log(`Inputs: frequency=${frequency}, size=${itemSize}, space=${space}`);
console.log("Expected: VX500 recommended\n");

// Test case 2: Large enterprise, high volume
console.log("TEST 2: Enterprise with high volume");
const frequency2 = 'high';
const itemSize2 = 'large';
const space2 = 'large';
console.log(`Inputs: frequency=${frequency2}, size=${itemSize2}, space=${space2}`);
console.log("Expected: AHNO-TB-D-192 recommended\n");

// Test case 3: Medium business
console.log("TEST 3: Medium-sized business");
const frequency3 = 'medium';
const itemSize3 = 'medium';
const space3 = 'standard';
console.log(`Inputs: frequency=${frequency3}, size=${itemSize3}, space=${space3}`);
console.log("Expected: VX1000 or LX2000 recommended\n");

console.log("✅ All test scenarios defined and ready for user interaction");
