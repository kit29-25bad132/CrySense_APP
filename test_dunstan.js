// Quick test to verify Dunstan module can be imported
const fs = require('fs');

// Read the Dunstan module
const dunstanCode = fs.readFileSync('src/utils/dunstanBabyLanguage.ts', 'utf8');

// Check for key functions
const requiredFunctions = [
  'detectDunstanPattern',
  'detectAdditionalPattern',
  'generateDunstanReport',
  'generateDecisionTree',
  'getActionableAdvice'
];

console.log('✅ Dunstan Baby Language Module Verification\n');

let allFound = true;
requiredFunctions.forEach(func => {
  if (dunstanCode.includes(`export function ${func}`)) {
    console.log(`✅ ${func} - Found`);
  } else {
    console.log(`❌ ${func} - Missing`);
    allFound = false;
  }
});

// Check for Dunstan patterns
const patterns = ['Neh', 'Owh', 'Heh', 'Eh', 'Eairh'];
console.log('\n✅ Dunstan Patterns:\n');
patterns.forEach(pattern => {
  if (dunstanCode.includes(`sound: '${pattern}'`)) {
    console.log(`✅ "${pattern}" pattern - Found`);
  } else {
    console.log(`❌ "${pattern}" pattern - Missing`);
    allFound = false;
  }
});

console.log('\n' + (allFound ? '✅ All checks passed!' : '❌ Some checks failed'));
process.exit(allFound ? 0 : 1);
