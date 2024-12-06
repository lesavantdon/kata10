function getCount(str) {
  var vowels = 0;
  str.split("").forEach(vow=>{
    
  if (vow === "a"|| vow=== "e" || vow ==="i" ||vow === "o" ||vow === "u"){
    vowels += 1;
    
  }
});
  return vowels;
  }
