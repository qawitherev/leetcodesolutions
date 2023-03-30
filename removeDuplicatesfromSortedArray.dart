class Solution {
  int removeDuplicates(List<int> nums) {
    if (nums.empty) return 0; //do list empty checking 
    int i = 0; //slow pointer 
    for (int j = 1; j < nums.length; j++) { //fast pointer 
      if (nums[j] != nums[i]) {
        i++;
        nums[i] = nums[j]; // move foward
      }
    }
    return i + 1; //return number of occurence 
  }
}
