#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
    int rev(int n)
    {
        int r = 0;
        while (n > 0)
        {
            r *= 10;
            r += (n % 10);
            n /= 10;
        }
        return r;
    }

public:
    int countNicePairs(vector<int> &nums)
    {
        int n = nums.size();
        int count = 0;
        unordered_map<int, int> mp;

        for (int i = 0; i < n; i++)
        {
            nums[i] -= rev(nums[i]);
        }

        for (int i = 0; i < n; i++)
        {
            count = count%1000000007;
            if (mp.find(nums[i]) != mp.end())
            {
                count += mp[nums[i]];
            }
            mp[nums[i]]++;
        }

        return count%1000000007;
    }
};