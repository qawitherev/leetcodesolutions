class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
    
    //first we create a hashmap of int key and value
        val map = mutableMapOf<Int, Int>()
        
        //loop through the array 
        for (i in nums.indices){
            
            //for each number inside the array, calculate its complement (target-nums[i])
            val complement = target - nums[i]
            if (map.containsKey(complement)){
                return intArrayOf(map[complement]!!, i)
            }
            
            //if no complement found in key hashmap, add i to value and nums[i] to key  (since we want the index number)
            map[nums[i]] = i
        }
        throw IllegalArgumentException("No two sum solution")
    }
}
