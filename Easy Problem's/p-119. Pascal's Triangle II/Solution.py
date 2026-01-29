class Solution:
    def getRow(self, rowIndex: int) -> List[int]: # type: ignore
            traingle = [[1]]
            for i in range(1,rowIndex + 1):
                    ans = [1]

                    for j in range(1,i):
                        ans.append(traingle[i - 1][j - 1] + traingle[i - 1][j])
                    
                    ans.append(1)
                    traingle.append(ans)
            
            return traingle[rowIndex]