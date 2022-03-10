function LongestMatrixPath(strArr) { 
    // code goes here  
    if(strArr.length === 0) return 0;
  
    let m = strArr.length;
    let n = strArr[0].length;
    let cache = [m][n];
    let ans = 0;
  
    for(let i = 0; i < m; i++){
      for (let j =0; j < n; j++){
        ans = Math.max(ans, dfs(strArr, i, j, cache)); 
       return ans;
        }
      }
  
    return strArr; 
  }
  
  const dfs = function (strArr, i, j, cache){
    if (strArr[i][j] != null) return strArr[i][j];
    for(let d in strAarr){
      let x = i + d[0]; 
      let y = j + d[1];
     
      if(0 <= x && x < m && 0 <= y && y < n && strArr[x][y] > strArr[i][j]);
      let ans = Math.max(ans, dfs(strArr, x, y));
  
    }
    return strArr[i][j]++;
  }
     
  // keep this function call here 
  console.log(LongestMatrixPath(readline()));